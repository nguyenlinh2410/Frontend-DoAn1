import "./DsDiTich.scss";
import { getAllDiTich } from "../../services/DiTichService";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function DsDiTich() {
    const navigate = useNavigate();
  
      const { i18n } = useTranslation();

  const [ditichs, setDiTich] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllDiTich();
    setDiTich(data);
  };

  
  return (
    <div className="DsDiTich">
      <div className="main-container">
        {ditichs.map((ditich) => (
          <div className="ditich">
            <img src={ditich.hinh_anh} alt="avarta" className="img-ditich" />
            <div className="content-right">
              <h2>{i18n.language === "vi"
                      ? ditich.tieu_de_vi
                      : ditich.tieu_de_en}</h2>
              <p className="desc">
               {i18n.language === "vi"
                      ? ditich.tom_tat_vi
                      : ditich.tom_tat_en}
              </p>
              <button className="btn" onClick={()=>navigate(`/di-tich/${ditich.slug}`)}>Khám phá ngay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
