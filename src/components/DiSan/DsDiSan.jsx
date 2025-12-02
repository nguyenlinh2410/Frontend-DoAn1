import "../DiTich/DsDiTich.scss";
import { getDiSanByDanhMuc } from "../../services/DiSanService";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DsDiSan() {
    const navigate = useNavigate();
  
      const { i18n } = useTranslation();

  const [disans, setDiSan] = useState([]);
const {id}=useParams();
  useEffect(() => {
    fetchUsers();
  }, [id]);

  const fetchUsers = async () => {
    const data = await getDiSanByDanhMuc(id);
    setDiSan(data);
  };

  console.log("check di san: ",disans)
  return (
    <div className="DsDiTich">
      <div className="main-container">
        {disans.map((disan) => (
          <div className="ditich">
            <img src={disan.hinh_anh} alt="avarta" className="img-ditich" />
            <div className="content-right">
              <h2>{i18n.language === "vi"
                      ? disan.tieu_de_vi
                      : disan.tieu_de_en}</h2>
              <p className="desc">
               {i18n.language === "vi"
                      ? disan.tom_tat_vi
                      : disan.tom_tat_en}
              </p>
              <button className="btn" onClick={()=>navigate(`/di-san/${disan.slug}`)}>Khám phá ngay</button>
              {/* <button className="btn" >Khám phá ngay</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
