import "./DsTuyen.scss";
// import veheader from "../../assets/img/veheader.png";
import { getAllTuyen,getImageTuyen } from "../../services/DatVeService";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
import ModalDatVe from "./ModalFormDatVe";

export default function DsTuyen() {
    // const navigate = useNavigate();
    const [selectedTuyen,setSelectedTuyen]=useState(null)
  const [showModal,setShowModal]=useState(false)
      const { i18n } = useTranslation();

  const [tuyens, setTuyen] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllTuyen();
    setTuyen(data);
  };
  return (
    <div class="container-tuyen">
      <h1 className="Title">Giá Vé và Tuyến Tham Quan</h1>

      <div class="tickets-grid">
        {tuyens.map((tuyen) => (
        <div class="ticket-card">
          <div class="ticket-image">
            <img src={getImageTuyen(tuyen.id)} alt="" />
          </div>
          <div class="ticket-info">
            <h2 class="ticket-title">{i18n.language === "vi"
                      ? tuyen.ten_tuyen_vi
                      : tuyen.ten_tuyen_en}</h2>

            <div class="price-section">
              <div class="price-item">
                <span class="price-label">Người lớn cao trên 1,3m: </span>
                <span class="price-value">{tuyen.gia_nguoi_lon} VNĐ/Người</span>
              </div>
              <div class="price-item">
                <span class="price-label">Trẻ em từ 1m - 1,3m: </span>
                <span class="price-value">{tuyen.gia_tre_em} VNĐ/Bé</span>
              </div>
            </div>
            <div className="gach-tuyen"></div>

            <div class="notes">
              <p>* Giá vé đã bao gồm phí đò và phí danh lam</p>
              <p>* Một thuyền chở tối đa 4-5 khách tùy trọng lượng</p>
            </div>
            <div className="gach-tuyen"></div>

            <button class="book-button" onClick={()=>{setShowModal(true)
              setSelectedTuyen(tuyen)
            }}>Đặt vé ngay</button>

          </div>
        </div>))}
      </div>
      <ModalDatVe show={showModal} handleClose={()=>setShowModal(false)} tuyen={selectedTuyen}/>
    </div>
  );
}
