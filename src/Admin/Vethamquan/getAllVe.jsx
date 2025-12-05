import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { getAllVe,deleteVe } from "../../services/VeService";
import "../getAllAd.css";
export default function GetAllVe() {
//   const navigate = useNavigate();
  const [ves, setVe] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllVe();
    setVe(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteVe(id);
      fetchUsers(); //load lai danh sach
    } catch (e) {
      console.log("err delete ve", e);
    }
  };
  return (
    <>

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Mã Vé</th>
          <th>Họ tên</th>
          <th>Sđt</th>
          <th>Email</th>
          <th>Tổng Tiền</th>
          <th>Ngày Đặt</th>
          <th>Action</th>
        </tr>
        {ves.length > 0 ? (
          ves.map((ve,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{ve.ma_ve}</td>
              <td>{ve.ho_ten_khach}</td>
              <td>{ve.sdt}</td>
              <td>{ve.email}</td>
              <td>{ve.tong_tien}</td>
              <td>{ve.ngay_dat}</td>
              <td>
                {/* <button
                  className="edit-btn"
                //   onClick={() => navigate(`/admin/ditich/edit/${ditich.id}`)}
                >
                  Sửa
                </button> */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ve.id)}
                >
                  Huỷ
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
