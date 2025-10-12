import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../services/UserService";
import "./getAllAd.css";
export default function GetAllAdmin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(); //load lai danh sach
    } catch (e) {
      console.log("err delete user", e);
    }
  };
  return (
    <>
      <h1 className="Allad">All Admin</h1>

      <table className="table-ad">
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/admin/edit/${user.id}`)}
                >
                  Sửa
                </button>
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
          <tr>Không có admin</tr>
        )}
      </table>
    </>
  );
}
