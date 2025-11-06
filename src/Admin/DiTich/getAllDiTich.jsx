import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDiTich,deleteDiTich } from "../../services/DiTichService";
import "../getAllAd.css";
export default function GetAllDiTich() {
  const navigate = useNavigate();
  const [ditichs, setDiTich] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllDiTich();
    setDiTich(data);
  };

  const handleDelete = async (id) => {
      try {
        await deleteDiTich(id);
        fetchUsers(); //load lai danh sach
      } catch (e) {
        console.log("err delete di tich", e);
      }
    };
  return (
    <>
      {/* <h1 className="Allad">All Admin</h1> */}

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Tiêu Đề</th>
          <th>Slug</th>
          <th>Tóm Tắt</th>
          <th>Hình Ảnh</th>
          <th>Action</th>
        </tr>
        {ditichs.length > 0 ? (
          ditichs.map((ditich,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{ditich.tieu_de_vi}</td>
              <td>{ditich.slug}</td>
              <td>{ditich.tom_tat_vi}</td>
              <td><img src={ditich.hinh_anh}  alt="" style={{width:"50px", height:"50px"}}/></td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/ditich/edit/${ditich.id}`)}
                >
                  Sửa
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ditich.id)}
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
