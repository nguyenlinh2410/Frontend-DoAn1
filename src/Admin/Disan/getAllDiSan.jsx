import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDiSan,deleteDiSan } from "../../services/DiSanService";
import "../getAllAd.css";
export default function GetAllDiTich() {
  const navigate = useNavigate();
  const [disans, setDiSan] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllDiSan();
    setDiSan(data);
  };

  const handleDelete = async (id) => {
      try {
        await deleteDiSan(id);
        fetchUsers(); //load lai danh sach
      } catch (e) {
        console.log("err delete di sản", e);
      }
    };
  return (
    <>

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Danh Mục</th>
          <th>Tiêu Đề</th>
          <th>Slug</th>
          <th>Tóm Tắt</th>
          <th>Hình Ảnh</th>
          <th>Action</th>
        </tr>
        {disans.length > 0 ? (
          disans.map((disan,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{disan.danh_muc_id}</td>
              <td>{disan.tieu_de_vi}</td>
              <td>{disan.slug}</td>
              <td>{disan.tom_tat_vi}</td>
              <td><img src={disan.hinh_anh}  alt="" style={{width:"50px", height:"50px"}}/></td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/disan/edit/${disan.id}`)}
                >
                  Sửa
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(disan.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>Không có Di tich</tr>
        )}
      </table>
    </>
  );
}
