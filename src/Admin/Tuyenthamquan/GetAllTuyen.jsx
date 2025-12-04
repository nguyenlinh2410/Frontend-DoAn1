import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTuyen,getImageTuyen,deleteTuyen } from "../../services/DatVeService";
import "../getAllAd.css";
export default function GetAllTuyen() {
  const navigate = useNavigate();
  const [tuyens, setTuyen] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllTuyen();
    setTuyen(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTuyen(id);
      fetchUsers(); //load lai danh sach
    } catch (e) {
      console.log("err delete tuyen", e);
    }
  };
  return (
    <>

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Tên tuyến</th>
          <th>Giá người lớn</th>
          <th>Giá trẻ em</th>
          <th>Hình Ảnh</th>
          <th>Action</th>
        </tr>
        {tuyens.length > 0 ? (
          tuyens.map((tuyen,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{tuyen.ten_tuyen_vi}</td>
              <td>{tuyen.gia_nguoi_lon}</td>
              <td>{tuyen.gia_tre_em}</td>
              <td><img src={getImageTuyen(tuyen.id)}  alt="img" style={{width:"50px", height:"50px"}}/></td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/admin/tuyen/edit/${tuyen.id}`)}
                >
                  Sửa
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(tuyen.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>Không có tuyến</tr>
        )}
        
      </table>
    </>
  );
}
