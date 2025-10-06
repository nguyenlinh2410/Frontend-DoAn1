import { useState, useEffect } from "react";
import "../App.css";
import {
  getAllPerson,
  DeletePerson,
  UpdatePerson,
} from "../services/UserService";
import { useNavigate } from "react-router-dom";

function MainAd() {
  const navigate = useNavigate();

  const handleCreatePerson = () => {
    navigate("/create");
  };

  const [person, setPerson] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getAllPerson();
      if (res && res.data) {
        setPerson(res.data.data);
        console.log("check res", res.data.data);
      } else {
        console.log("err from server");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeletePerson = async (id) => {
    try {
      await DeletePerson(id);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };
  const handleEdit = async (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <h2>Danh sach person</h2>
      <table>
        <tr className="title">
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
        </tr>
        {person.map((item, index) => (
          <tr key={index} className="item-person">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
              <button className="btn" onClick={() => handleEdit(item.id)}>
                Update
              </button>
              <button
                className="btn"
                onClick={() => handleDeletePerson(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <button className="btn" onClick={handleCreatePerson}>
        Create
      </button>
    </>
  );
}

export default MainAd;
