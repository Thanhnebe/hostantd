require('dotenv').config();
const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static('.'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// Cấu hình Zalo OA
const ZALO_CONFIG = {
    app_id: process.env.ZALO_APP_ID,
    app_secret: process.env.ZALO_APP_SECRET,
    oa_id: process.env.ZALO_OA_ID,
    admin_user_id: process.env.ZALO_ADMIN_USER_ID || 'USER_ID_ADMIN'
};

// Biến lưu token hiện tại
let currentAccessToken = process.env.ZALO_ACCESS_TOKEN;
let tokenExpiryTime = null;

// Function tự động lấy access token mới
async function refreshZaloToken() {
    try {
        console.log('🔄 Đang refresh Zalo access token...');

        // Tạo authorization URL
        const authUrl = `https://oauth.zaloapp.com/v4/permission?app_id=${ZALO_CONFIG.app_id}&redirect_uri=${encodeURIComponent('https://huunhat11.vercel.app/api/zalo/callback')}&state=refresh_${Date.now()}`;

        console.log('📋 Authorization URL:', authUrl);
        console.log('⚠️ Vui lòng truy cập URL trên, đăng nhập và cấp quyền để lấy code mới');

        return {
            success: false,
            message: 'Cần lấy code mới từ authorization URL',
            authUrl: authUrl
        };

    } catch (error) {
        console.error('❌ Lỗi refresh token:', error);
        return {
            success: false,
            message: 'Không thể refresh token',
            error: error.message
        };
    }
}

// Function kiểm tra và lấy token hợp lệ
async function getValidAccessToken() {
    // Nếu chưa có token hoặc token đã hết hạn
    if (!currentAccessToken || currentAccessToken === 'YOUR_OA_ACCESS_TOKEN') {
        console.log('⚠️ Chưa có access token, cần lấy token mới');
        return await refreshZaloToken();
    }

    return {
        success: true,
        accessToken: currentAccessToken
    };
}

// Function cập nhật token
function updateAccessToken(newToken) {
    currentAccessToken = newToken;
    console.log('✅ Đã cập nhật access token mới');
}

// Cấu hình Email (Gmail) - chỉ dùng nếu cần
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
};

// Tạo transporter email
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// API gửi đăng ký tư vấn
app.post('/api/zalo-register', async (req, res) => {
    const { name, email, phone, area } = req.body;

    // Tạo tin nhắn cho Zalo
    const zaloMessage = `🔔 ĐĂNG KÝ TƯ VẤN MỚI

👤 Họ và tên: ${name}
📧 Email: ${email}
📱 Số điện thoại: ${phone}
📍 Khu vực: ${area}

💬 Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.

⏰ Thời gian: ${new Date().toLocaleString('vi-VN')}`;

    // Tạo nội dung email
    const emailSubject = '🔔 Đăng Ký Tư Vấn Mới - Bio Amida';
    const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50;">🔔 ĐĂNG KÝ TƯ VẤN MỚI</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>👤 Họ và tên:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>📱 Số điện thoại:</strong> ${phone}</p>
                <p><strong>📍 Khu vực:</strong> ${area}</p>
                <p><strong>⏰ Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
            </div>
            <p><strong>💬 Nhu cầu:</strong> Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.</p>
            <hr style="margin: 20px 0;">
            <p style="color: #7f8c8d; font-size: 12px;">
                Tin nhắn này được gửi tự động từ website Bio Amida.<br>
                Vui lòng liên hệ khách hàng trong thời gian sớm nhất.
            </p>
        </div>
    `;

    try {
        // Gửi tin nhắn Zalo (nếu có cấu hình)
        if (ZALO_CONFIG.admin_user_id && ZALO_CONFIG.admin_user_id !== 'USER_ID_ADMIN') {
            try {
                // Lấy token hợp lệ
                const tokenResult = await getValidAccessToken();

                if (!tokenResult.success) {
                    console.log('⚠️ Không thể lấy access token:', tokenResult.message);
                    if (tokenResult.authUrl) {
                        console.log('📋 Authorization URL:', tokenResult.authUrl);
                    }
                } else {
                    // Gửi tin nhắn với token hợp lệ
                    await axios.post('https://openapi.zalo.me/v2.0/oa/message', {
                        recipient: { user_id: ZALO_CONFIG.admin_user_id },
                        message: { text: zaloMessage }
                    }, {
                        headers: {
                            'access_token': tokenResult.accessToken,
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log('✅ Gửi tin nhắn Zalo thành công');
                }
            } catch (zaloError) {
                console.log('❌ Lỗi gửi tin nhắn Zalo:', zaloError.message);

                // Nếu lỗi do token hết hạn, thử refresh
                if (zaloError.response?.data?.error === -216) {
                    console.log('🔄 Token hết hạn, đang thử refresh...');
                    const refreshResult = await refreshZaloToken();
                    if (refreshResult.authUrl) {
                        console.log('📋 Vui lòng truy cập để lấy token mới:', refreshResult.authUrl);
                    }
                }
            }
        }

        // Gửi email (nếu có cấu hình)
        if (EMAIL_CONFIG.auth.user && EMAIL_CONFIG.auth.user !== 'your-email@gmail.com' && EMAIL_CONFIG.auth.pass && EMAIL_CONFIG.auth.pass !== 'your-app-password') {
            try {
                // Cấu hình email
                const mailOptions = {
                    from: EMAIL_CONFIG.auth.user,
                    to: EMAIL_CONFIG.auth.user, // Gửi về chính email admin
                    subject: emailSubject,
                    html: emailContent
                };

                // Gửi email
                await transporter.sendMail(mailOptions);
                console.log('✅ Gửi email thành công');
            } catch (emailError) {
                console.log('❌ Lỗi gửi email:', emailError.message);
            }
        }

        res.json({
            success: true,
            message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
            timestamp: new Date().toISOString()
        });

    } catch (err) {
        console.error('❌ Lỗi xử lý đăng ký:', err);
        res.status(500).json({
            error: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            details: err.message
        });
    }
});

// Serve trang chủ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API callback cho Zalo OA
app.get('/api/zalo/callback', (req, res) => {
    const { code, state } = req.query;

    console.log('🔔 Zalo callback received:', { code, state });

    // Xử lý authorization code từ Zalo
    if (code) {
        // Lưu code để đổi lấy access token
        console.log('✅ Authorization code received:', code);
        res.json({
            success: true,
            message: 'Authorization successful',
            code: code
        });
    } else {
        res.status(400).json({
            error: 'No authorization code received'
        });
    }
});

// API để đổi authorization code lấy access token
app.post('/api/zalo/token', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Authorization code required' });
    }

    try {
        const response = await axios.post('https://oauth.zaloapp.com/v4/access_token', {
            app_id: ZALO_CONFIG.app_id,
            app_secret: ZALO_CONFIG.app_secret,
            code: code,
            grant_type: 'authorization_code'
        });

        console.log('✅ Access token received:', response.data);

        // Cập nhật token mới vào biến
        if (response.data.access_token) {
            updateAccessToken(response.data.access_token);
        }

        res.json({
            success: true,
            message: 'Token đã được cập nhật thành công',
            data: response.data
        });

    } catch (error) {
        console.error('❌ Error getting access token:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Failed to get access token',
            details: error.response?.data || error.message
        });
    }
});

// API để lấy authorization URL
app.get('/api/zalo/auth-url', (req, res) => {
    const authUrl = `https://oauth.zaloapp.com/v4/permission?app_id=${ZALO_CONFIG.app_id}&redirect_uri=${encodeURIComponent('https://huunhat11.vercel.app/api/zalo/callback')}&state=refresh_${Date.now()}`;

    res.json({
        success: true,
        authUrl: authUrl,
        message: 'Truy cập URL này để lấy authorization code'
    });
});

// API kiểm tra trạng thái server
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        services: {
            zalo: ZALO_CONFIG.access_token !== 'YOUR_OA_ACCESS_TOKEN'
        }
    });
});

// Export app cho Vercel serverless
module.exports = app;

// Chỉ chạy server khi không phải Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server đang chạy trên port ${PORT}`);
        console.log(`📧 Email: ${EMAIL_CONFIG.auth.user !== 'your-email@gmail.com' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
        console.log(`💬 Zalo: ${ZALO_CONFIG.admin_user_id && ZALO_CONFIG.admin_user_id !== 'USER_ID_ADMIN' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
    });
}