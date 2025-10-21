import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/UserService";
import "./create.css";
import HeaderAd from "./HeaderAd";
function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id);
        console.log("check res: ", res);
        setFormData({
          name: res.user.name,
          email: res.user.email,
        });
      } catch (e) {
        console.error("Loi load user: ", e);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      navigate("/admin");
    } catch (e) {
      console.error("Loi khi cap nhat: ", e);
    }
  };
  return (
    <>
      <HeaderAd />
      <h2 className="title">EDIT USER</h2>

      <form onSubmit={handleSubmit} className="Edit">
        <label>Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input type="submit" value="Edit" />
      </form>
    </>
  );
}

export default EditUser;
