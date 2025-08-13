// Mảng ảnh đại lý
const products1 = [
    {
        id: 1,
        image: "images/quytrinh/z6606560319806_443226f1a3761b66834e061cc7c36ed3.jpg",
        alt: "Quy trình đào tạo đại lý Bio Amida",
        name: "Đào tạo đại lý mới"
    },
    {
        id: 2,
        image: "images/quytrinh/z6606560327231_98c74ddd71bac919ae893df4121e09c7.jpg",
        alt: "Hướng dẫn bán hàng cho đại lý",
        name: "Hướng dẫn bán hàng"
    },
    {
        id: 3,
        image: "images/quytrinh/z6606560333304_e735c5192088dc7fc79f13109bb4e157.jpg",
        alt: "Kho hàng đại lý Bio Amida",
        name: "Kho hàng đại lý"
    },
    {
        id: 4,
        image: "images/quytrinh/z6606560335282_e5e961dd1b5fa4d40a08bc43f44871b7.jpg",
        alt: "Trưng bày sản phẩm tại đại lý",
        name: "Trưng bày sản phẩm"
    },
    {
        id: 5,
        image: "images/quytrinh/z6606560346130_9aa9ff65b41d3311b1c75f62b847b2cd.jpg",
        alt: "Hỗ trợ khách hàng tại đại lý",
        name: "Hỗ trợ khách hàng"
    },
    {
        id: 6,
        image: "images/quytrinh/z6606560348805_03c75b5f6a0b4a4de579e9cb6ea0c6ab.jpg",
        alt: "Giao hàng cho đại lý",
        name: "Giao hàng đại lý"
    },
    {
        id: 7,
        image: "images/quytrinh/z6606560351503_e1677427583f86a330b6fb3e529bae54.jpg",
        alt: "Kiểm tra chất lượng sản phẩm",
        name: "Kiểm tra chất lượng"
    },
    {
        id: 8,
        image: "images/quytrinh/z6606560353131_136b7f9b9819a1ba06a582b081c74c4d.jpg",
        alt: "Đào tạo kỹ năng bán hàng",
        name: "Đào tạo kỹ năng"
    },
    {
        id: 9,
        image: "images/quytrinh/z6606560360808_9b60148e6aac051babcc44a93d1e927a.jpg",
        alt: "Họp đại lý định kỳ",
        name: "Họp đại lý định kỳ"
    },
    {
        id: 10,
        image: "images/quytrinh/z6606560361110_78bc1153128c2a1f09b11d204fa21251.jpg",
        alt: "Chia sẻ kinh nghiệm kinh doanh",
        name: "Chia sẻ kinh nghiệm"
    },
    {
        id: 11,
        image: "images/quytrinh/z6606560366288_c35967ba06a716bc65a2e160526b7cb6.jpg",
        alt: "Khen thưởng đại lý xuất sắc",
        name: "Khen thưởng đại lý"
    }
];

const products = [
    { id: 4, image: "images/anhvanphong/daily/z6829025988859_0ab05326158d2efbf42aa4fe37295633.jpg", name: "Ảnh đại lý ở thanh hóa", name: "Ảnh đại lý ở thanh hóa" },
    { id: 5, image: "images/anhvanphong/daily/z6829026050187_8c448373bec64d21b31932b94da99186.jpg", name: "Ảnh đại lý ở hà nội", name: "Ảnh đại lý ở hà nội" },
    { id: 6, image: "images/anhvanphong/daily/z6829026190272_f79f77f89659cc8aba86fc4641067c7e.jpg", name: "Ảnh đại lý ở Hồ chí minh", name: "Ảnh đại lý ở Hồ chí minh" },
    { id: 7, image: "images/anhvanphong/daily/z6829026331213_dfc7fa6cf8ed95c4fb43b651277c255a.jpg", name: "Ảnh đại lý ở hà tĩnh", name: "Ảnh đại lý ở hà tĩnh" },
    { id: 8, image: "images/anhvanphong/daily/z6829026436318_89829e208dd16ee573449faf1b5eff3b.jpg", name: "ảnh đại lý ở nghệ an ", name: "ảnh đại lý ở nghệ an " },
    { id: 33, image: "images/anhvanphong/daily/z6829026627022_9429d84f1e506c16e33b78c91ccce383.jpg", name: "ảnh đại lý ở quảng bình", name: "Khai trương ở Kỳ Anh" },
    { id: 34, image: "images/anhvanphong/daily/z6829026550439_8bbd7f743e5fe4f1f1786cb467abcde2.jpg", name: "ảnh đại lý ở đồng hới", name: "ảnh đại lý ở đồng hới" },
    { id: 35, image: "images/anhvanphong/daily/z6829026768066_fa384c9d644235473bdc9e4dadeb3ce8.jpg", name: "ảnh đại lý ở kỳ anh", name: "ảnh đại lý ở kỳ anh" },
    { id: 36, image: "images/anhvanphong/daily/z6829026886300_046de0107d751526ca971c462db7b71e.jpg", name: "ảnh đại lý ở can lộc", name: "Khai trương ở Kỳ Anh" },
    { id: 37, image: "images/anhvanphong/daily/z6829027002308_93ff5e3e0395d51334228b1512cba944.jpg", name: "ảnh đại lý ở nha trang", name: "Khai trương ở Kỳ Anh" },
    { id: 38, image: "images/anhvanphong/daily/z6829027100792_8b2774e79bb9552f90c120ad8827be96.jpg", name: "ảnh đại lý ở cần thơ", name: "Khai trương ở Kỳ Anh" },
    { id: 39, image: "images/anhvanphong/daily/z6829027210392_ffef5e8726fd1cfe0db5f0984e28f9b3.jpg", name: "ảnh đại lý ở ninh bình", name: "ảnh đại lý ở ninh bình" },
    { id: 40, image: "images/anhvanphong/daily/z6829028121918_64924c83884337fbeff14ecea47a1b93.jpg", name: "ảnh đại lý ở hải dương", name: "ảnh đại lý ở hải dương" },
]

// Function tạo HTML cho sản phẩm
function createProductSlide(product) {
    return `
        <div class="swiper-slide">
            <div class="product-item" data-product-id="${product.id}" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}" data-aos="fade-up" loading="lazy">
                <div class="product-overlay">
                    <span class="product-name">${product.name}</span>
                    <span class="product-category">${product.category}</span>
                </div>
            </div>
        </div>
    `;
}

// Function render tất cả sản phẩm
function renderProducts() {
    const productSwiperWrapper = document.querySelector('.product-swiper .swiper-wrapper');
    if (productSwiperWrapper) {
        const productHTML = products.map(product => createProductSlide(product)).join('');
        productSwiperWrapper.innerHTML = productHTML;
    }
}

// Function render sản phẩm theo category
function renderProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productSwiperWrapper = document.querySelector('.product-swiper .swiper-wrapper');
    if (productSwiperWrapper) {
        const productHTML = filteredProducts.map(product => createProductSlide(product)).join('');
        productSwiperWrapper.innerHTML = productHTML;
    }
}

// Khởi tạo product swiper
let productSwiper;

function initProductSwiper() {
    productSwiper = new Swiper('.product-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Xóa phần pagination này
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
}

// Animation for fade-in-up
function handleFadeInUp() {
    const fadeEls = document.querySelectorAll('.fade-in-up');
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

// Function xử lý click vào sản phẩm trong slider
function handleProductSliderClick(e) {
    const productItem = e.target.closest('.product-item');
    if (productItem) {
        const img = productItem.querySelector('img');
        if (img) {
            const modal = document.getElementById('productImageModal');
            const modalImg = document.getElementById('modalProductImg');
            if (modal && modalImg) {
                modalImg.src = img.src;
                modal.classList.add('active');
                modal.style.display = 'flex';
            }
        }
        e.preventDefault();
        e.stopPropagation();
        return;
    }
}

// Đóng modal khi click vào nút đóng hoặc nền modal
function setupProductImageModalEvents() {
    const modal = document.getElementById('productImageModal');
    const closeBtn = document.getElementById('closeProductImageModal');
    if (modal && closeBtn) {
        closeBtn.onclick = function () {
            modal.classList.remove('active');
            modal.style.display = 'none';
        };
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        };
    }
}

// Function xử lý click vào summary content
function handleViewAllProducts() {
    const button = event.target;
    const originalText = button.innerHTML;

    // Hiệu ứng loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chuyển...';
    button.disabled = true;

    // Chuyển trang sau 1 giây
    setTimeout(() => {
        window.location.href = 'products.html';
    }, 1000);
}

// Khởi tạo khi DOM load xong
document.addEventListener('DOMContentLoaded', function () {
    // Render sản phẩm
    renderProducts();

    // Khởi tạo product swiper
    initProductSwiper();

    // Banner swiper
    const swiper = new Swiper('.banner-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // Fade in animation
    handleFadeInUp();

    // Thêm event listener cho click vào sản phẩm
    document.addEventListener('click', handleProductSliderClick);

    // Thêm event listener cho summary content
    const viewAllProducts = document.getElementById('viewAllProducts');
    if (viewAllProducts) {
        viewAllProducts.addEventListener('click', handleViewAllProducts);
    }
    setupProductImageModalEvents();
});

// Function gửi thông tin đăng ký tư vấn
async function sendToZalo(event) {
    event.preventDefault();

    const form = document.getElementById('zaloForm');
    const formData = new FormData(form);

    // Lấy thông tin từ form
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const area = formData.get('area');

    // Validate dữ liệu
    if (!name || !phone || !area) {
        showErrorMessage('Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Số điện thoại, Khu vực)');
        return false;
    }

    // Validate số điện thoại
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại 10-11 chữ số.');
        return false;
    }

    // Hiển thị loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
    submitBtn.disabled = true;

    // Dữ liệu gửi đến server
    const data = {
        name: name,
        email: email || '',
        phone: phone,
        area: area
    };

    // Gửi dữ liệu đến serverless function
    const apiUrl = "https://huunhat11.vercel.app/api/zalo-register";

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showSuccessMessage('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            form.reset();
        } else {
            showErrorMessage(result.error || 'Có lỗi xảy ra, vui lòng thử lại.');
        }
    } catch (error) {
        console.error('Lỗi kết nối:', error);
        showErrorMessage('Không thể kết nối tới máy chủ. Vui lòng thử lại sau.');
    }

    // Khôi phục nút submit
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    return false;
}

// Function hiển thị thông báo thành công
function showSuccessMessage(message = 'Đăng ký thành công!') {
    showNotification(message, 'success');
}

// Function hiển thị thông báo lỗi
function showErrorMessage(message = 'Có lỗi xảy ra!') {
    showNotification(message, 'error');
}

// Function hiển thị thông báo chung
function showNotification(message, type = 'success') {
    // Tạo thông báo
    const notification = document.createElement('div');
    notification.className = `${type}-notification`;

    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    const bgColor = type === 'success' ? '#4CAF50' : '#f44336';

    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icon}"></i>
            <span>${message}</span>
        </div>
    `;

    // Thêm style cho notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Thêm vào body
    document.body.appendChild(notification);

    // Tự động ẩn sau 5 giây
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll event for fade-in-up
window.addEventListener('scroll', handleFadeInUp);