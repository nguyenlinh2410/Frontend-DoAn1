import React from "react";
import "./About.css";
import images from "../../assets/img";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="gioithieu">
      <div className="main-container">
        <div className="video">
          <iframe
            width="950"
            height="500"
            src="https://www.youtube.com/embed/Nv55_Mzy4J8?si=7vS8h75wqvoq974X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="container1">
          <h1 className="title1">{t("Gioithieu.title1")}</h1>
        </div>

        <h2 className="intro-title2">{t("Gioithieu.intro-title2")}</h2>
        <div className="container2">
          <p className="title2">
            <p>{t("Gioithieu.title21")}</p>
            <p>{t("Gioithieu.title22")}</p>
            <p>{t("Gioithieu.title23")}</p>
            <p>{t("Gioithieu.title24")}</p>
          </p>
        </div>
        <img
          className="anhgioithieu"
          src={images["anh1gioithieu.jpg"]}
          alt="anh gioi thieu"
        />

        <hr />
        {/* <!-- ==================UNESCO================== --> */}
        <h2 className="intro-title3">DI SẢN THẾ GIỚI UNESCO</h2>
        <div className="container3">
          <p className="title3">
            Quần thể danh thắng Tràng An được UNESCO công nhận là Di sản Văn hóa
            và Thiên nhiên Thế giới vào năm 2014 – trở thành di sản hỗn hợp đầu
            tiên của Việt Nam. Danh hiệu này khẳng định giá trị nổi bật toàn cầu
            của Tràng An trên cả hai phương diện: <br />
            &#8226; Giá trị thiên nhiên: Hệ thống núi đá vôi, thung lũng ngập
            nước và các hang động xuyên thủy độc đáo được hình thành suốt hàng
            triệu năm, tạo nên cảnh quan ngoạn mục và hiếm có.
            <br />
            &#8226; Giá trị văn hóa – lịch sử: Tràng An lưu giữ dấu tích cư trú
            liên tục của người Việt cổ từ hơn 30.000 năm trước, cùng nhiều công
            trình gắn với triều đại nhà Trần và quá trình dựng nước – giữ nước.
            <br />
            Sự kết hợp hài hòa giữa thiên nhiên nguyên sơ và chiều sâu văn hóa
            lâu đời đã giúp Tràng An trở thành điểm đến mang tầm vóc quốc tế,
            được bảo tồn và trân trọng như một viên ngọc quý của Việt Nam và thế
            giới.
          </p>
        </div>
        <img
          className="anhunesco"
          src={images["anh2gioithieu.jpg"]}
          alt="anh UNESCO"
        />
        <hr />

        {/* <!-- ==================NÉT HẤP DẪN ================== --> */}
        <h2 className="intro-title4">NÉT HẤP DẪN CỦA TRÀNG AN</h2>
        <div className="container-hapdan">
          <div className="grid-container1">
            <div className="content">
              <h3>1. Vẻ đẹp núi đá vôi và dòng nước trong xanh</h3>
              <p>
                Tràng An gây ấn tượng mạnh mẽ bởi hệ thống núi đá vôi và thung
                lũng xanh liên kết với nhau qua những dòng nước trong vắt. Du
                khách được ngồi thuyền xuôi theo sông, len qua các hang động tự
                nhiên huyền ảo như Hang Sáng, Hang Tối, Hang Địa Linh… tạo thành
                hành trình khám phá đầy mới mẻ và yên bình.
              </p>
            </div>
            <div className="content">
              <h3>2. Dấu ấn văn hóa – lịch sử đặc sắc của Tràng An</h3>
              <p>
                Bên cạnh cảnh quan thiên nhiên kỳ vĩ, Tràng An còn sở hữu nhiều
                điểm đến mang giá trị văn hóa – lịch sử. Hành cung Vũ Lâm, đền
                Trình hay đền Trần đều gắn liền với triều đại nhà Trần, giúp du
                khách hiểu hơn về lịch sử và văn hóa Việt Nam qua từng dấu tích
                còn lại.
              </p>
            </div>
          </div>
          <div className="center-dot">
            <div className="linehorizontal"></div>
            <div className="linevertical"></div>
            <div className="dot"></div>
          </div>
          <div className="grid-container2">
            <div className="content">
              <h3>3. Sự hài hòa giữa thiên nhiên và bảo tồn du lịch</h3>
              <p>
                Một nét hấp dẫn khác là sự kết hợp hài hòa giữa thiên nhiên
                nguyên sơ và môi trường du lịch được bảo tồn cẩn thận. Không
                gian trong lành, tĩnh lặng, cùng hoạt động chèo thuyền thủ công
                của người dân địa phương tạo nên trải nghiệm gần gũi, nhẹ nhàng
                và hoàn toàn khác biệt.
              </p>
            </div>
            <div className="content">
              <h3>4. Tràng An – vẻ đẹp thay đổi theo bốn mùa</h3>
              <p>
                Cuối cùng, Tràng An còn thu hút du khách bởi sự đa dạng sinh học
                và vẻ đẹp thay đổi theo mùa. Mùa xuân lễ hội đông vui, mùa hè
                xanh mướt, mùa thu trong trẻo và mùa đông trầm lắng – mỗi thời
                điểm đều mang lại một cảm xúc riêng, khiến bất kỳ ai ghé thăm
                cũng muốn quay lại lần nữa.
              </p>
            </div>
          </div>
        </div>
        <img
          className="nethapdan"
          src={images["gioithieu.jpg"]}
          alt="anh net hap dan"
        />
        {/* <!-- ======================lý do nổi tiếng==================== --> */}
        <h2 className="intro-title5">Lý do Tràng An trở nên nổi tiếng</h2>
        <div className="container-noitieng">
          <div className="col-left">
            <img
              className="anhleft1"
              src={images["anhcolleft1.jpg"]}
              alt="anh noi tieng 1"
            />
            <img
              className="anhleft2"
              src={images["anhcolleft2.jpg"]}
              alt="anh noi tieng 2"
            />
          </div>
          <div className="col-right">
            <p className="content1">
              <span className="first-word">Tràng An</span> nổi tiếng nhờ vẻ đẹp
              thiên nhiên kỳ vĩ, được xem như “Vịnh Hạ Long trên cạn” của Việt
              Nam. Hệ thống núi đá vôi cổ đại, hang động xuyên thủy và thung
              lũng ngập nước tạo nên cảnh quan duy nhất khó nơi nào có được. Bên
              cạnh đó, các di tích lịch sử và giá trị văn hóa lâu đời đã biến
              Tràng An trở thành điểm đến đáp ứng cả du lịch sinh thái và du
              lịch văn hóa.
            </p>
            <img
              className="anhright"
              src={images["anhcolright.jpg"]}
              alt="anh noi tieng 3"
            />
            <p className="content2">
              Sự kiện được UNESCO ghi danh là Di sản Thế giới hỗn hợp đầu tiên
              của Việt Nam vào năm 2014 càng giúp Tràng An trở thành một biểu
              tượng du lịch tầm cỡ quốc tế.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
