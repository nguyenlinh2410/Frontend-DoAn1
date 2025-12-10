import { getAllLienHe,deleteLienHe } from "../services/UserService";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./getAllAd.css";
export default function LienHes() {
//   const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllLienHe();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteLienHe(id);
      fetchUsers(); //load lai danh sach
    } catch (e) {
      console.log("err delete user", e);
    }
  };
  return (
    <>
      <h1 className="Allad">Danh sách thông tin liên hệ</h1>

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        {users.length > 0 ? (
          users.map((user,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {/* <button
                  className="edit-btn"
                //   onClick={() => navigate(`/admin/edit/${user.id}`)}
                >
                  Sửa
                </button> */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>Không có thông tin</tr>
        )}
        
      </table>
    </>
  );
}
