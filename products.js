const products = [
    {
        id: 1,
        name: "Nước giặt cao cấp BIO AMIDA hương Comfort ",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp hương Comfort.jpg",
        category: "Giặt Xả",
        description: [
           "🔥 Ưu điểm vượt trội 5in1",

            "✅ Hoạt chất làm sạch gốc thực vật",
            
            "✅ Loại bỏ vết bẩn nhanh chóng",
            
            "✅ Lưu hương suốt ngày dài",
            
            "✅ Giữ màu tốt cho quần áo",
            
            "✅ Phù hợp cho các loại máy giặt, cả giặt máy và giặt tay",
            
            "✅ Độ PH trung tính tránh ăn mòn, hại vải quần áo."
        ]
    },
    {
        id: 2,
        name: "Nước giặt cao cấp AMIDA HOME",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp AMIDA HOME.jpg",
        category: "Giặt Xả",
        description: [
       "✅ Loại bỏ 99% vết bẩn cứng đầu",

                "Công nghệ sử dụng enzyme hữu cơ giúp đánh bay mồ hôi, dầu mỡ, vết thức ăn... bóc tách chất bẩn mà không cần chà mạnh, sạch sâu vết bẩn, tiết kiệm thời gian giặt.",
                
                "✅ Bảo vệ màu sắc & sợi vải mềm mịn",
                
                "Giữ cho quần áo luôn bền màu, không phai, không xù lông – kể cả sau nhiều lần giặt.",
                
                "✅ Lưu hương 3 tầng bền lâu, thơm tự nhiên",
                
                "Chiết xuất hương độc quyền tạo mùi thơm nhẹ dịu, dễ chịu – không gắt, không hóa chất, thời gian lưu hương lên tới 7 ngày.",
                
                "✅ An toàn cho da bé & da nhạy cảm"
        ]
    }, {
        id: 3,
        name: "Nước giặt cao cấp hương cá ngựa",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp hương cá ngựa.jpg",
        category: "Giặt Xả",
        description: [
           "✅ Hoạt chất làm sạch gốc thực vật",

            "✅ Loại bỏ vết bẩn nhanh chóng",

            "✅ Lưu hương suốt ngày dài",

            "✅ Giữ màu tốt cho quần áo",   

            "✅ Phù hợp cho các loại máy giặt, cả giặt máy và giặt tay",

            "✅ Độ PH trung tính tránh ăn mòn, hại vải quần áo."
        ]
    }, {
        id: 4,
        name: "Nước giặt cao cấp hương nước hoa",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp hương nước hoa.jpg",
        category: "Giặt Xả",
        description: [
            "✅ Hoạt chất làm sạch gốc thực vật",

            "✅ Loại bỏ vết bẩn nhanh chóng",

            "✅ Lưu hương suốt ngày dài",

            "✅ Giữ màu tốt cho quần áo",

            "✅ Phù hợp cho các loại máy giặt, cả giặt máy và giặt tay",

            "✅ Độ PH trung tính tránh ăn mòn, hại vải quần áo."
            
        ]
    },
    {
        id: 5,
        name: "Nước giặt cao cấp hương green",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp hương green.jpg",
        category: "Giặt Xả",
        description: [
           "✅ Hoạt chất làm sạch gốc thực vật",

            "✅ Loại bỏ vết bẩn nhanh chóng",

            "✅ Lưu hương suốt ngày dài",

            "✅ Giữ màu tốt cho quần áo",
            
            "✅ Phù hợp cho các loại máy giặt, cả giặt máy và giặt tay",

            "✅ Độ PH trung tính tránh ăn mòn, hại vải quần áo."
            
        ]
    },
    {
        id: 6,
        name: "Nước giặt cao cấp hương hoa nhiệt đới",
        image: "images/sanphamgiohang/imgsanpham/Nước giặt cao cấp hương hoa nhiệt đới.jpg",
        category: "Giặt Xả",
        description: [
                "✅ Loại bỏ 99% vết bẩn cứng đầu",

                "Công nghệ sử dụng enzyme hữu cơ giúp đánh bay mồ hôi, dầu mỡ, vết thức ăn... bóc tách chất bẩn mà không cần chà mạnh, sạch sâu vết bẩn, tiết kiệm thời gian giặt.",
                
                "✅ Bảo vệ màu sắc & sợi vải mềm mịn",
                
                "Giữ cho quần áo luôn bền màu, không phai, không xù lông – kể cả sau nhiều lần giặt.",
                
                "✅ Lưu hương 3 tầng bền lâu, thơm tự nhiên",
                
                "Chiết xuất hương độc quyền tạo mùi thơm nhẹ dịu, dễ chịu – không gắt, không hóa chất, thời gian lưu hương lên tới 7 ngày.",
                
                "✅ An toàn cho da bé & da nhạy cảm"
        ]
    },
    {
        id: 7,
        name: "Viên giặt cao cấp BIO AMIDA",
        image: "images/sanphamgiohang/imgsanpham/Viên giặt cao cấp.jpg",
        category: "Giặt Xả",
        description: [
            
                "✅ Loại bỏ 99% vết bẩn cứng đầu",

                "Công nghệ sử dụng enzyme hữu cơ giúp đánh bay mồ hôi, dầu mỡ, vết thức ăn... bóc tách chất bẩn mà không cần chà mạnh, sạch sâu vết bẩn, tiết kiệm thời gian giặt.",
                
                "✅ Bảo vệ màu sắc & sợi vải mềm mịn",
                
                "Giữ cho quần áo luôn bền màu, không phai, không xù lông – kể cả sau nhiều lần giặt.",
                
                "✅ Lưu hương 3 tầng bền lâu, thơm tự nhiên",
                
                "Chiết xuất hương độc quyền tạo mùi thơm nhẹ dịu, dễ chịu – không gắt, không hóa chất, thời gian lưu hương lên tới 7 ngày.",
                
                "✅ An toàn cho da bé & da nhạy cảm"
            ]
        },
        {  

            id: 8,
            name: "Xả Vải Khô BIO AMIDA Hương Cá Ngựa",
            image: "images/sanphamgiohang/imgsanpham/Xả vải khô hương cá ngựa.jpg",
            category: "Giặt Xả",
            description: [
                "✅ Bảo vệ màu sắc & giữ sợi vải luôn tươi mềm",

                "Giúp quần áo bền màu, không phai – sợi vải mềm mại, không xù hay cứng ráp.",

                "✅ Lưu hương suốt ngày dài",

                "Tỏa hương thơm dịu nhẹ, bền lâu suốt cả ngày – cho cảm giác dễ chịu khi mặc.",

                "✅ Công nghệ bung tỏa hạt lưu hương",

                "Hương thơm bền lâu– giúp quần áo luôn thơm mới như vừa giặt.",
            ]
        },
        {
            id: 9,
            name: "Xả Vải Khô BIO AMIDA Hương Hoa Ly",
            image: "images/sanphamgiohang/imgsanpham/Xả vải khô hương nước hoa.jpg",
            category: "Giặt Xả",
            description: [
                "✅ Bảo vệ màu sắc & giữ sợi vải luôn tươi mềm",    

                "Giúp quần áo bền màu, không phai – sợi vải mềm mại, không xù hay cứng ráp.",

                "✅ Lưu hương suốt ngày dài",

                "Tỏa hương thơm dịu nhẹ, bền lâu suốt cả ngày – cho cảm giác dễ chịu khi mặc.",

                "✅ Công nghệ bung tỏa hạt lưu hương",

                "Hương thơm bền lâu– giúp quần áo luôn thơm mới như vừa giặt.",
            ]
        },
        {
            id: 10,
            name: "Nước xả vải Bio Amida 1,8 KG Hương ComFort",
            image: "images/sanphamgiohang/imgsanpham/Nước xả vải hương Comfort.jpg",
            category: "Giặt Xả",
            description: [
                "✅ Bảo vệ màu sắc & giữ sợi vải luôn tươi mềm",

                "Giúp quần áo bền màu, không phai – sợi vải mềm mại, không xù hay cứng ráp.",

                "✅ Lưu hương suốt ngày dài",

                "Tỏa hương thơm dịu nhẹ, bền lâu suốt cả ngày – cho cảm giác dễ chịu khi mặc.",

                "✅ Công nghệ bung tỏa hạt lưu hương",

                "Hương thơm bền lâu– giúp quần áo luôn thơm mới như vừa giặt.",

                "✅ An toàn cho da tay & mọi loại vải",

                "Không gây kích ứng da – phù hợp với cả vải cotton, lụa, len, đồ trẻ em hoặc đồ mặc sát da, phù hợp cho cả da tay em bé và da nhạy cảm ",
            ]
        },
        {
            id: 11,
            name: "Nước xả vải Bio Amida 1,8 KG Hương Dnee",
            image: "images/sanphamgiohang/imgsanpham/Nước xả vải hương Dnee Amida.jpg",
            category: "Giặt Xả",
            description: [
                "✅ Bảo vệ màu sắc & giữ sợi vải luôn tươi mềm",

                "Giúp quần áo bền màu, không phai – sợi vải mềm mại, không xù hay cứng ráp.",

                "✅ Lưu hương suốt ngày dài",

                "Tỏa hương thơm dịu nhẹ, bền lâu suốt cả ngày – cho cảm giác dễ chịu khi mặc.",

                "✅ Công nghệ bung tỏa hạt lưu hương",

                "Hương thơm bền lâu– giúp quần áo luôn thơm mới như vừa giặt.",

                "✅ An toàn cho da tay & mọi loại vải",
            ]
        },
        {            
            id: 12,
            name: "Xịt Phòng Bio Amida Hương Xuân",
            image: "images/sanphamgiohang/imgsanpham/Nước hoa xịt phòng hương xuân.jpg",
            category: "Xịt phòng",
            description: [
                "✅ Hương thơm tự nhiên, sang trọng",

                "Mùi hương dịu nhẹ nhưng đầy cuốn hút, giúp không gian trở nên ấm cúng và đẳng cấp hơn",

                "✅ Mang lại cảm giác sảng khoái, thư giãn",

                "Chỉ một lần xịt – không gian lập tức tươi mới, dễ chịu, giảm căng thẳng, nâng cao tâm trạng.",

                "✅ Khử mùi ẩm mốc, khó chịu hiệu quả",

                "Đánh bay mùi ẩm mốc, mùi thức ăn, mùi phòng kín, thuốc lá… nhanh chóng mà không để lại     mùi hóa chất.",

                "   ✅ Tiện lợi – Tiết kiệm – Dễ sử dụng",
            ]       
        },
        {
            id: 13,
            name: "Xịt Phòng Bio Amida Hương Phu Thê",
            image: "images/sanphamgiohang/imgsanpham/Nước hoa xịt phòng hương phu thê.jpg",
            category: "Xịt phòng",
            description: [
                "✅ Hương thơm tự nhiên, sang trọng",

                "Mùi hương dịu nhẹ nhưng đầy cuốn hút, giúp không gian trở nên ấm cúng và đẳng cấp hơn",

                "✅ Mang lại cảm giác sảng khoái, thư giãn",

                "Chỉ một lần xịt – không gian lập tức tươi mới, dễ chịu, giảm căng thẳng, nâng cao tâm trạng.",

                "✅ Khử mùi ẩm mốc, khó chịu hiệu quả",

                "Đánh bay mùi ẩm mốc, mùi thức ăn, mùi phòng kín, thuốc lá… nhanh chóng mà không để lại     mùi hóa chất.",

                "✅ Tiện lợi – Tiết kiệm – Dễ sử dụng",
            ]

                
                
        },
        {
            id: 14,
            name: "Bình Xịt Xua Đuổi Nhặng- Nhặng Xanh- Gián",
            image: "images/sanphamgiohang/imgsanpham/Xịt thông minh xua đổi ruồi -nhặng xanh - gián.jpg",
            category: "Tẩy xịt Côn trùng",
            description: [
                "✅ Xua đuổi ruồi, nhặng xanh, gián hiệu quả",

                "Công thức đặc biệt từ tinh dầu thiên nhiên giúp đuổi côn trùng nhanh chóng mà không cần hóa chất độc hại.",

                "✅ Khử mùi và làm sạch không khí nhẹ nhàng",

                "Không chỉ đuổi côn trùng mà còn giúp không gian luôn thơm mát, dễ chịu.",

                "✅ An toàn cho sức khỏe – thân thiện môi trường",

                "Không gây kích ứng – thích hợp cho gia đình có trẻ nhỏ, người lớn tuổi, thú cưng.",
            ]
        },
        {
            id: 15,
            name: "Bình Xịt Thông Minh Muỗi - Kiến - Gián",
            image: "images/sanphamgiohang/imgsanpham/Xịt thông minh xua đổi muỗi - kiến - gián.jpg",
            category: "Tẩy xịt Côn trùng",
            description: [
               "✅ Tinh dầu thiên nhiên dịu nhẹ",

                "Chiết xuất từ sả chanh giúp xua đuổi muỗi, kiến, gián một cách tự nhiên, không độc hại.",

                "✅ An toàn cho sức khỏe – thân thiện với trẻ nhỏ",

                "Không chứa không hóa chất gây hại – phù hợp với gia đình có em bé và người lớn tuổi.",

                "✅ Hiệu quả lâu dài, không gây nhờn dính",

                 "Mùi hương dễ chịu lưu lại đủ lâu để côn trùng tránh xa, không gây khó chịu cho người dùng.",  
            ]
        },
        {
            id: 16,
            name: "Bình xịt tẩy rỉ sét",
            image: "images/sanphamgiohang/imgsanpham/tẩy rỉ sét.webp",
            category: "Tẩy xịt Côn trùng",
            description: [
                "✅ Làm sạch đến 100% vết rỉ sét trên mọi bề mặt kim loại",

                "✅ Hiệu quả trên cả đồng, inox, sắt thép, cửa sổ, bản lề, dụng cụ...",

                "✅ Tẩy vết rỉ trên sàn nhà và cả quần áo",

                "✅ Nới lỏng các bộ phận bị rỉ – dễ tháo mở, dễ sửa chữa",

                "✅ Tạo lớp chống rỉ – giữ cho vật dụng luôn bền đẹp theo thời gian",

                "✅ Không cần chà mạnh với vết rỉ mới – sạch ngay trong 30 giây",
            ]
        },
        {
            id: 17,
            name: "Cốc thả bồn cầu Bio Amida 5 in 1",
            image: "images/sanphamgiohang/imgsanpham/Cốc thả bồn cầu 5in 1.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Khử trùng & khử mùi nhanh chóng",

                "Công thức sinh học giúp giúp tiêu diệt 99% vi khuẩn gây mùi và gây hại mà không cần tẩy rửa bằng tay, loại bỏ mùi hôi, vi khuẩn gây hại, mang lại cảm giác sạch sẽ, thơm mát cho WC.",

                "✅ Giữ cho gốm sứ sáng bóng, chống ăn mòn",

                "Duy trì độ sáng của men sứ, ngăn tình trạng ố vàng và không gây trầy xước bề mặt bồn cầu.",

                "✅ Tẩy sạch mảng bám cứng đầu",

                "Loại bỏ vết bẩn bám trong thành và kẽ bồn cầu như dầu mỡ, nước tiểu, vết phân… mà không cần cọ rửa thủ công.",

                "✅ Tạo lớp màng bảo vệ sau mỗi lần xả nước",

                "Dung dịch sau khi xả sẽ phủ lên bề mặt bồn cầu một lớp màng chống bám bẩn, giúp giữ sạch lâu hơn.",
            ]
        },
        {
            id: 18,
            name: "Tẩy bồn cầu BIO AMIDA hương quế",
            image: "images/sanphamgiohang/imgsanpham/Tẩy bồn cầu hương quế.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Tẩy rửa bằng công nghệ sinh học tiên tiến Công thức enzyme tự nhiên giúp phân hủy, tẩy sạch cực nhanh các chất bẩn, rêu, mảng bám, cặn bẩn, vết ố vàng, cáu bẩn  hiệu quả mà không cần dùng hóa chất mạnh.",
                "✅ Diệt khuẩn đến 99%.",
                "✅ Giải pháp tẩy rửa tối ưu cho gia đình.",
                "✅ Thân thiện với người sử dụng & môi trường.",
                "✅Sạch vượt trội – Khử mùi hiệu quả – An toàn từng lần xả!.",

            ]
        },
        {
            id: 19,
            name: "Tẩy bồn cầu BIO AMIDA hương bạc hà",
            image: "images/sanphamgiohang/imgsanpham/Tẩy bồn cầu hương bạc hà.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Tẩy rửa bằng công nghệ sinh học tiên tiến Công thức enzyme tự nhiên giúp phân hủy, tẩy sạch cực nhanh các chất bẩn, rêu, mảng bám, cặn bẩn, vết ố vàng, cáu bẩn  hiệu quả mà không cần dùng hóa chất mạnh.",
                "✅ Diệt khuẩn đến 99%.",
                "✅ Giải pháp tẩy rửa tối ưu cho gia đình.",
                "✅ Thân thiện với người sử dụng & môi trường.",
                "✅Sạch vượt trội – Khử mùi hiệu quả – An toàn từng lần xả!.",

            ]
        },
        {
            id: 20,
            name: "Tẩy lồng máy giặt Bio Amida",
            image: "images/sanphamgiohang/imgsanpham/Tẩy lồng máy giặt.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Tẩy sạch nấm mốc, cáu bẩn và mảng bám lâu ngày",

                "Công nghệ sinh học giúp làm sạch sâu bên trong lồng giặt – nơi vi khuẩn và nấm mốc thường tích tụ.",

                "✅ Loại bỏ hoàn toàn cặn bẩn ẩn dấu",

                "Phân hủy chất bẩn bám sau thành lồng giặt, khe kẽ và ống xả – trả lại máy giặt sạch như mới.",

                "✅ Ngăn mùi hôi & vi khuẩn quay trở lại",

                "Giữ cho quần áo không bị ám mùi ẩm mốc, giúp giặt sạch hiệu quả hơn.",

                "✅ An toàn – Không ăn mòn lồng giặt",

                "Không chứa hóa chất mạnh, không gây gỉ sét hay hư hại linh kiện máy – phù hợp cả máy giặt cửa ngang và cửa trên.",
            ]
        },
        {
            id: 21,
            name: "Tẩy Trắng, Tẩy Mốc BIO AMIDA",
            image: "images/sanphamgiohang/imgsanpham/Tẩy trắng quần áo.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
             "✅ Tẩy sạch các vết mốc, ố vàng lâu ngày",

             "✅ Hiệu quả trên quần áo, khăn, rèm cửa, vải sợi… cả với các vết mốc cứng đầu.",

             "✅ Phục hồi độ trắng sáng cho vải vóc",

             "✅ An toàn cho da – không mùi hóa chất nồng",
             ]
        },
        {
            id: 21,
            name: "Thông Tắc Ống Cống BIO AMIDA",
            image: "images/sanphamgiohang/imgsanpham/Thông tắc ống cống.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
             "✅ Phân hủy mảng bám & chất thải hiệu quả",

              "Công nghệ enzyme sinh học giúp làm mềm và phân rã cặn bẩn, tóc rối, dầu mỡ... gây tắc nghẽn trong ống thoát nước.",

              "✅ Thông tắc nhẹ nhàng – không ăn mòn đường ống",

              "Không chứa hóa chất mạnh, không gây hư hại ống nhựa, ống kim loại – đảm bảo độ bền hệ thống thoát nước.",

              "✅ Khử mùi hôi – ngăn mùi quay trở lại",

               "Loại bỏ triệt để mùi hôi do cặn hữu cơ tích tụ, giữ cho bồn rửa, nhà vệ sinh, sàn thoát nước luôn thơm tho, sạch sẽ.",

              "✅ An toàn cho sức khỏe & thân thiện môi trường",
            ]
        },
        {
            id: 22,
            name: "Tẩy Bọt Tuyết Đa Năng BIO AMIDA",
            image: "images/sanphamgiohang/imgsanpham/Tẩy bọt tuyết đa năng.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
              "✅ Tẩy đa năng – làm sạch hoàn hảo",

                "Đánh bay các vết bẩn lâu ngày, mảng bám cứng đầu, dầu mỡ trên nhiều bề mặt khác nhau chỉ trong vài bước.",

               "✅ Hiệu quả trên nhiều chất liệu",

                "Sử dụng an toàn cho kim loại, nhựa, da nhân tạo – da tự nhiên, men sứ, inox và nhiều loại vật dụng khác.",

               "✅ Công thức bọt tuyết sinh học thông minh",
 
                "Bọt dày, bám dính lâu giúp làm mềm vết bẩn – dễ dàng lau sạch mà không cần chà mạnh.",

               "✅ An toàn – không ăn mòn – không độc hại",
              ]
        },
        {
            id: 23,
            name: "Túi Thơm Bio Amida",
            image: "images/sanphamgiohang/imgsanpham/Túi thơm.jpg",
            category: "Xịt phòng",
            description: [
             "✅ Tỏa hương dịu nhẹ, thư giãn, mang đến cảm giác sạch sẽ, dễ chịu;",

             "Chứa hạt thơm sinh học giúp lan tỏa hương thơm dễ chịu suốt nhiều tuần liền; Giúp không gian sống luôn thơm mát, tạo cảm hứng thư giãn và thoải mái.",

             "✅ Khử mùi hiệu quả",

             "Loại bỏ mùi ẩm mốc, mùi hôi trong tủ đồ, phòng kín, xe hơi, nhà bếp, nhà vệ sinh...",

             "✅ Thiết kế tiện lợi, dễ sử dụng",

             "Chỉ cần treo hoặc đặt vào tủ, ngăn kéo, túi xách, balo, xe ô tô… là hương",
            ]
        },
        {
            id: 24,
        name: "Dầu gội Bio Amida 500ml",
        image: "images/sanphamgiohang/imgsanpham/Dầu gội cao cấp 500ml.jpg",
        category: "Chăm sóc cá nhân",
        description: [
            "✅ Chiết xuất thiên nhiên lành tính",

            "Công thức từ thảo mộc và tinh dầu thiên nhiên, nhẹ dịu cho da đầu – không chứa hóa chất gây hại.",

            "✅ Dưỡng tóc mềm mượt – chắc khỏe từ gốc đến ngọn",

            "Nuôi dưỡng từng sợi tóc, phục hồi tóc khô xơ, chẻ ngọn, mang lại mái tóc mềm mại và óng mượt.",

            "✅ Cân bằng độ ẩm – chống khô, rối tóc",

            "Cung cấp độ ẩm vừa đủ, giúp tóc luôn bồng bềnh, không bị xẹp hay bết dính.",
            ]
        },
        {
           id: 25,
           name: "Dầu gội Bio Amida 800ml",
           image: "images/sanphamgiohang/imgsanpham/Dầu gội cao cấp 800ml.jpg",
           category: "Chăm sóc cá nhân",
           description: [
             "✅ Chiết xuất thiên nhiên lành tính",

             "Công thức từ thảo mộc và tinh dầu thiên nhiên, nhẹ dịu cho da đầu – không chứa hóa chất gây hại.",

             "✅ Dưỡng tóc mềm mượt – chắc khỏe từ gốc đến ngọn",

             "Nuôi dưỡng từng sợi tóc, phục hồi tóc khô xơ, chẻ ngọn, mang lại mái tóc mềm mại và óng mượt.",

             "✅ Cân bằng độ ẩm – chống khô, rối tóc",
  
            "Cung cấp độ ẩm vừa đủ, giúp tóc luôn bồng bềnh, không bị xẹp hay bết dính.",
              ]
        },
        {
            id: 26,
            name: "Dầu gội nam 2 in 1 Bio Amida",
            image: "images/sanphamgiohang/imgsanpham/Dầu gội 2in 1 dành cho nam.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Dưỡng tóc chắc khỏe – sạch sâu da đầu",

                "Làm sạch bụi bẩn, dầu nhờn và mồ hôi, đồng thời nuôi dưỡng mái tóc khỏe mạnh, không khô xơ.",

                "✅ Dưỡng da toàn thân mịn màng – không khô rát",

                "Chiết xuất thiên nhiên giúp làm sạch da nhẹ nhàng, giữ ẩm và làm dịu làn da sau một ngày hoạt động.",

                "✅ Mùi hương nam tính – mạnh mẽ, lôi cuốn",

                "Hương thơm tươi mát, đậm chất phái mạnh, lưu hương lâu, tạo cảm giác tự tin suốt cả ngày.",

                "✅ Công thức sinh học an toàn – chiết xuất tự nhiên",

                "Không chứa hóa chất độc hại – dịu nhẹ cho da và tóc, phù hợp cả với da nhạy cảm.",

                "✅ Tiện lợi – Nhanh chóng – Dễ sử dụng tại nhà",
            ]
                
        },
        {
            id: 27,
            name: "Dầu gội phủ bạc Bio Amida ",
            image: "images/sanphamgiohang/imgsanpham/Dầu gội phủ bạc.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Che phủ tóc bạc chỉ sau 1 lần gội",

                "Công thức phủ màu tự nhiên giúp làm đều màu tóc, che phủ tóc bạc nhanh chóng mà không cần nhuộm.",

                "✅ Làm sạch tóc & da đầu hiệu quả",

                "Kết hợp giữa gội và phủ bạc – làm sạch bụi bẩn, dầu nhờn và gàu trên da đầu trong một bước tiện lợi.",

                "✅ Dưỡng tóc mềm mượt, bóng khỏe",

                "Chiết xuất tinh dầu thảo dược giúp nuôi dưỡng tóc từ bên trong, hạn chế khô xơ sau khi phủ màu.",

                "✅ Không hại tóc – không chứa hóa chất độc hại",

                "Thành phần sinh học an toàn, không gây kích ứng da đầu, phù hợp cả với da nhạy cảm.",

                "✅ Tiện lợi – Nhanh chóng – Dễ sử dụng tại nhà",
            ]
                
        },
        {
            id: 28,
            name: "Dầu xả Bio Amida 500ml",
            image: "images/sanphamgiohang/imgsanpham/Dầu xả cao cấp 500ml.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Giúp mái tóc bóng mượt & mềm mại",

                "Dưỡng ẩm sâu, giúp tóc luôn mềm mượt, óng ả mà không gây bết dính.",

                "✅ Ngăn tóc khô xơ, rối rít",

                "Giữ cho từng sợi tóc tơi nhẹ, dễ chải – không xơ rối sau khi gội.",

                "✅ Bổ sung dưỡng chất cho chân tóc",

                "Cung cấp vitamin & tinh chất thiên nhiên nuôi dưỡng da đầu và nang tóc khỏe mạnh.",

                "✅ Giúp ngọn tóc chắc khỏe – giảm gãy rụng",

                "Tăng cường độ đàn hồi, phục hồi tóc yếu, hạn chế chẻ ngọn và gãy rụng hiệu quả.",
                
            ]
        },
        {
            id: 29,
            name: "Dầu xả Bio Amida 800ml",
            image: "images/sanphamgiohang/imgsanpham/Dầu xả cao cấp 800ml.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Giúp mái tóc bóng mượt & mềm mại",

                "Dưỡng ẩm sâu, giúp tóc luôn mềm mượt, óng ả mà không gây bết dính.",

                "✅ Ngăn tóc khô xơ, rối rít",

                "Giữ cho từng sợi tóc tơi nhẹ, dễ chải – không xơ rối sau khi gội.",

                "✅ Bổ sung dưỡng chất cho chân tóc",

                "Cung cấp vitamin & tinh chất thiên nhiên nuôi dưỡng da đầu và nang tóc khỏe mạnh.",

                "✅ Giúp ngọn tóc chắc khỏe – giảm gãy rụng",

                "Tăng cường độ đàn hồi, phục hồi tóc yếu, hạn chế chẻ ngọn và gãy rụng hiệu quả.",
                
            ]
         },
        {
            id: 30,
            name: "Dung dịch vệ sinh phụ nữ Bio Amida 250ml",
            image: "images/sanphamgiohang/imgsanpham/Dung dịch vệ sinh  250ml.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Làm sạch nhẹ nhàng – không gây khô rát",

                "Công thức sinh học êm dịu, loại bỏ bụi bẩn – mồ hôi mà không làm tổn thương hay khô da vùng nhạy cảm.",

                "✅ Khử mùi – giữ hương thơm thoáng mát",

                "Giúp kiểm soát mùi hiệu quả, mang lại cảm giác sạch sẽ, dễ chịu suốt ngày dài.",

                "✅ Cân bằng độ pH sinh lý",

                "Hỗ trợ duy trì môi trường vi sinh tự nhiên, bảo vệ vùng kín luôn khỏe mạnh.",

                "✅ Ngăn ngừa viêm nhiễm & các bệnh phụ khoa",
            ]
        },  
        {
            id: 31,
            name: "Dung dịch vệ sinh phụ nữ Bio Amida 100ml",
            image: "images/sanphamgiohang/imgsanpham/Dung dịch vệ sinh  150ml.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Làm sạch nhẹ nhàng – không gây khô rát",

                "Công thức sinh học êm dịu, loại bỏ bụi bẩn – mồ hôi mà không làm tổn thương hay khô da vùng nhạy cảm.",

                "✅ Khử mùi – giữ hương thơm thoáng mát",

                "Giúp kiểm soát mùi hiệu quả, mang lại cảm giác sạch sẽ, dễ chịu suốt ngày dài.",
            ]
        },
        {
            id: 32,
            name: "Sữa Rửa Tay BIO AMIDA",
            image: "images/sanphamgiohang/imgsanpham/Sữa rửa tay.jpg",
            category: "Chăm sóc cá nhân",
            description: [
             "✅ Làm sạch bụi bẩn, bã nhờn trên tay",

             "Loại bỏ hiệu quả bụi bẩn, mồ hôi, vi khuẩn sau khi ăn uống, làm việc, đi ngoài trời…",

             "✅ Kháng khuẩn đến 99%",

             "Công nghệ sinh học giúp loại bỏ vi khuẩn gây hại, bảo vệ đôi tay sạch sẽ, an toàn cho cả người lớn và trẻ nhỏ.",

             "✅ Dưỡng ẩm – mềm mịn da tay",

             "Chiết xuất thiên nhiên giữ da tay không bị khô ráp sau khi rửa, nuôi dưỡng da luôn mềm mại.",

             "✅ Hương thơm dịu nhẹ, thư giãn",
            ]
        },
        {
            id: 33,
            name: "SỮA TẮM BIO AMIDA 500ml",
            image: "images/sanphamgiohang/imgsanpham/Sữa tắm 500ml.jpg",
            category: "Chăm sóc cá nhân",
            description: [
                "✅ Chiết xuất thiên nhiên dịu nhẹ",

                "Làm sạch nhẹ nhàng mà không gây khô da, an toàn cho cả làn da nhạy cảm.",

                "✅ Dưỡng ẩm – phục hồi – nuôi dưỡng làn da",

                "Cung cấp độ ẩm cần thiết, giúp phục hồi làn da khô ráp, bong tróc – mang lại cảm giác mềm mại, dễ chịu.",

                "✅ Làm sáng và đều màu da",

                "Hỗ trợ làm mờ vết sạm, giúp da trắng sáng tự nhiên, rạng rỡ hơn mỗi ngày.",

                "✅ Lưu hương dịu nhẹ suốt ngày dài",

                "Hương thơm hoa oải hương tinh tế, dễ chịu – cho bạn cảm giác thư giãn, sạch sẽ và tự tin sau mỗi lần tắm.",

                "--Mỗi giọt sữa tắm – Một lần yêu chiều làn da của bạn!",
            ]
        },
        {
               id: 34,
               name: "SỮA TẮM BIO AMIDA 800ml",
               image: "images/sanphamgiohang/imgsanpham/Sữa tắm 800ml.jpg",
               category: "Chăm sóc cá nhân",
                description: [
                  "✅ Chiết xuất thiên nhiên dịu nhẹ",

                  "Làm sạch nhẹ nhàng mà không gây khô da, an toàn cho cả làn da nhạy cảm.",

                  "✅ Dưỡng ẩm – phục hồi – nuôi dưỡng làn da",
  
                  "Cung cấp độ ẩm cần thiết, giúp phục hồi làn da khô ráp, bong tróc – mang lại cảm giác mềm mại, dễ chịu.",

                  "✅ Làm sáng và đều màu da",

                  "Hỗ trợ làm mờ vết sạm, giúp da trắng sáng tự nhiên, rạng rỡ hơn mỗi ngày.",

                  "✅ Lưu hương dịu nhẹ suốt ngày dài",

                  "Hương thơm hoa oải hương tinh tế, dễ chịu – cho bạn cảm giác thư giãn, sạch sẽ và tự tin sau mỗi lần tắm.",

                  "--Mỗi giọt sữa tắm – Một lần yêu chiều làn da của bạn!",
                
                ]
        },
        {
              id: 35,
              name: "Kem Đánh Răng Bio Amida",
              image: "images/sanphamgiohang/imgsanpham/Kem đánh răng.jpg",
              category: "Chăm sóc cá nhân",
              description: [
                "✅ Hơi thở thơm mát dài lâu Tạo cảm giác sảng khoái, giúp bạn tự tin khi giao tiếp.",
                "✅ Ngăn ngừa và làm sạch mảng bám Làm sạch răng miệng hiệu quả.",
                "✅ Chiết xuất sinh học an toàn.",
                "✅ Tự tin với nụ cười rạng rỡ Sạch miệng, sáng răng, hơi thở dễ chịu – giúp bạn luôn sẵn sàng tỏa sáng!",,
             ]
        },
        {
            id: 36,
            name: "Nước lau sàn Bio Amida Hương Chanh Sả",
            image: "images/sanphamgiohang/imgsanpham/Lau sàn hương canh xả.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Loại bỏ bụi bẩn, dầu mỡ & vi khuẩn nhanh chóng bằng công nghệ sinh học",

            "✅ Hương thơm dịu nhẹ – khử mùi ẩm mốc, lưu hương lâu",

            "✅ Không nhờn rít – sàn sạch bóng, khô nhanh",

            "✅ Dùng cho mọi loại sàn: gạch men, gỗ, đá hoa cương...",
                
            ]
        },
        {
            id: 37,
            name: "Nước lau sàn Bio Amida Hương Hoa Ly",
            image: "images/sanphamgiohang/imgsanpham/Lau sàn hương hoa ly.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Loại bỏ bụi bẩn, dầu mỡ & vi khuẩn nhanh chóng bằng công nghệ sinh học",

                "✅ Hương thơm dịu nhẹ – khử mùi ẩm mốc, lưu hương lâu",
    
                "✅ Không nhờn rít – sàn sạch bóng, khô nhanh",
    
                "✅ Dùng cho mọi loại sàn: gạch men, gỗ, đá hoa cương...",
            ]
        },
        {
            id: 38,
            name: "Nước lau sàn Bio Amida Hương Quế",
            image: "images/sanphamgiohang/imgsanpham/Lau sàn hương quế.webp",
            category: "Vệ sinh nhà cửa",
            description: [
                "✅ Loại bỏ bụi bẩn, dầu mỡ & vi khuẩn nhanh chóng bằng công nghệ sinh học",

                "✅ Hương thơm dịu nhẹ – khử mùi ẩm mốc, lưu hương lâu",
    
                "✅ Không nhờn rít – sàn sạch bóng, khô nhanh",
    
                "✅ Dùng cho mọi loại sàn: gạch men, gỗ, đá hoa cương...",
            ]
        },
        {
            id: 39,
            name: "Nước lau kính BIO AMIDA",
            image: "images/sanphamgiohang/imgsanpham/Nước lau kính.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
               "✅ Làm sạch bóng bề mặt kính",

               "Công thức sinh học hiện đại giúp loại bỏ nhanh chóng bụi bẩn, dấu vân tay và vết ố trên kính, không để lại vệt mờ hay đọng nước.",

               "✅ Cho kính trong suốt như mới",

               "Trả lại độ sáng bóng nguyên bản cho mọi loại thủy tinh và pha lê như: pha lê, gương soi, cửa kính, mặt bàn kính...",

               "✅ Chống bám bụi hiệu quả",

               "Tạo lớp bảo vệ nhẹ trên bề mặt kính, giúp giảm bám bụi, giữ kính sạch lâu hơn sau mỗi lần lau.",
 
               "✅ Hương thơm tự nhiên, dịu nhẹ",
            ]
        },
        {
            id: 40,
            name: "Nước rửa chén hương chanh 800ml và 1.6kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương chanh.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
                "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",

                "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
                "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
                "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
                "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
            ]
        },
        {
            id: 41,
            name: "Nước rửa chén hương chanh 3.6kg và 10kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương chanh 10kg.jpg",
            category: "Vệ sinh nhà cửa",
            description:  [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",

               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
        
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
             
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
        { 
            id: 42,
            name: "Nước rửa chén hương chanh xả 800ml và 1.6kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương chanh xả.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",
 
               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
        {
            id: 43,
            name: "Nước rửa chén hương chanh xả 3.6kg và 10kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương chanh xả 10kg.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",
 
               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
        {
            id: 44,
            name: "Nước rửa chén hương quế 800ml và 1.6kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương quế.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
                "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",

                "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
                "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
                "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
                "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
            ]
        },
        {
            id: 45,
            name: "Nước rửa chén hương quế 3.6kg và 10kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương quế 10kg.jpg",
            category: "Vệ sinh nhà cửa",
            description:  [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",

               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
        
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
             
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
        { 
            id: 46,
            name: "Nước rửa chén hương trà xanh 800ml và 1.6kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương trà xanh.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",
 
               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
        {
            id: 47,
            name: "Nước rửa chén hương trà xanh 3.6kg và 10kg",
            image: "images/sanphamgiohang/imgsanpham/Nước rửa chén hương trà xanh 10kg.jpg",
            category: "Vệ sinh nhà cửa",
            description: [
            
               "👐Công thức chiết xuất hoàn toàn từ thiên nhiên",
 
               "👐 Giúp bát đĩa sạch bóng, thơm tự nhiên",
            
               "👐 Dịu nhẹ với da tay, không gây khô ráp hay kích ứng",
            
               "👐 Phân hủy sinh học 100%, bảo vệ sức khỏe gia đình và thiên nhiên",
            
               "🌸 MÙI HƯƠNG TỰ NHIÊN – TƯƠI MÁT MỖI LẦN RỬA"
             ]
        },
]

// Function tạo HTML cho sản phẩm trong grid
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="view-details-btn">Xem Chi Tiết</button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category"></span>
                <p>${product.category}</p>
            </div>
        </div>
    `;
}

// Function render tất cả sản phẩm
function renderAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        const productsHTML = products.map(product => createProductCard(product)).join('');
        productsGrid.innerHTML = productsHTML;
    }
}

// Function render sản phẩm theo category
function renderProductsByCategory(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        let filteredProducts;
        if (category === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }
        const productsHTML = filteredProducts.map(product => createProductCard(product)).join('');
        productsGrid.innerHTML = productsHTML;
    }
}

// Function xử lý click filter
function handleFilterClick(e) {
    if (e.target.classList.contains('filter-btn')) {
        // Remove active class từ tất cả buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class cho button được click
        e.target.classList.add('active');

        // Get category
        const category = e.target.dataset.category;

        // Render sản phẩm theo category
        renderProductsByCategory(category);
    }
}

// Function xử lý click vào sản phẩm
function handleProductClick(e) {
    if (e.target.closest('.product-card')) {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.dataset.productId;

        // Có thể chuyển đến trang chi tiết sản phẩm
        // window.location.href = `product-detail.html?id=${productId}`;

        // Hoặc hiển thị modal chi tiết sản phẩm
        showProductModal(productId);
    }
}

// Function hiển thị modal chi tiết sản phẩm
function showProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        // Tạo modal HTML
        const modalHTML = `
            <div class="product-modal" id="productModal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-details">
                            <h2>${product.name}</h2>
                            <p class="category">Công Dụng: </p>
                            <p class="description">${product.description.map(item => `<li>${item}</li>`).join('')}</p>
                            <button class="contact-btn">Liên Hệ Tư Vấn</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Thêm modal vào body
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Hiển thị modal
        document.getElementById('productModal').style.display = 'flex';

        // Xử lý đóng modal
        document.querySelector('.close-modal').onclick = function () {
            document.getElementById('productModal').remove();
        };

        // Đóng modal khi click bên ngoài
        document.getElementById('productModal').onclick = function (e) {
            if (e.target.id === 'productModal') {
                document.getElementById('productModal').remove();
            }
        };

        // Xử lý click nút Liên Hệ Tư Vấn - chuyển đến Zalo OA
        document.querySelector('.contact-btn').onclick = function () {
            const zaloOAUrl = 'https://zalo.me/3416749500273400315';
            window.open(zaloOAUrl, '_blank');
        };
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

// Khởi tạo khi DOM load xong
document.addEventListener('DOMContentLoaded', function () {
    // Render tất cả sản phẩm
    renderAllProducts();

    // Event listeners
    document.addEventListener('click', handleFilterClick);
    document.addEventListener('click', handleProductClick);
});
