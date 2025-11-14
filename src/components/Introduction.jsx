import "./Introduction.css";
import anh from "../assets/img/anhheader.png";

export default function Introduction() {
  return (
    <>
      <section class="section-info">
        <div class="info-container">
          <div class="info-text">
            <h2>Giới thiệu về Khu di tích Tràng An</h2>
            <p>
              Tràng An – quần thể danh thắng nổi tiếng của Ninh Bình, được
              UNESCO công nhận là Di sản Văn hóa và Thiên nhiên Thế giới. Với
              cảnh sắc non nước hữu tình, hệ thống hang động kỳ vĩ cùng giá trị
              lịch sử – tâm linh sâu sắc, Tràng An là điểm đến lý tưởng cho
              những ai yêu thiên nhiên và muốn khám phá vẻ đẹp hòa quyện giữa
              đất trời và con người Việt Nam.
            </p>
            <button class="btn-more">Xem thêm</button>
          </div>

          <div class="info-image">
            <img src={anh} alt="Tràng An" />
          </div>
        </div>
      </section>

      <section class="section-info">
        <div class="info-container reverse">
          <div class="info-image">
            <img src={anh} alt="Danh thắng" />
          </div>

          <div class="info-text">
            <h2>Di tích và thắng cảnh Tràng An</h2>
            <p>
              Khu di tích lịch sử – văn hoá Cố đô Hoa Lư thuộc Quần thể di sản
              thế giới Tràng An. Di tích đã được Bộ Văn hoá xếp hạng là Di tích
              Quốc gia vào năm 1962 và được Thủ tướng Chính phủ xếp hạng là Di
              tích Quốc gia đặc biệt vào năm 2012 với tên “Di tích lịch sử và
              kiến trúc nghệ thuật Cố đô Hoa Lư”. Đây là điểm đến rất đặc biệt,
              mang đậm giá trị văn hóa – lịch sử và nổi tiếng với cảnh quan
              thiên nhiên tuyệt mỹ vô cùng.
            </p>
            <button class="btn-more">Xem thêm</button>
          </div>
        </div>
      </section>
    </>
  );
}
