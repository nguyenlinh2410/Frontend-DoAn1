import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/UserService";
import "./create.css";
import HeaderAd from "./HeaderAd";
function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createUser({ name, email, password });
      console.log("user created: ", res.data);
      alert("User created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      navigate("/admin");
    } catch (e) {
      console.error("Error creating user: ", e);
      alert("Error");
    }
  };

  return (
    <>
      <HeaderAd />
      <h2 className="title">CREATE USER</h2>

      <form onSubmit={handleSubmit} className="Create">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          placeholder="Your name.."
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="Your pass.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Create" className="create-submit" />
      </form>
    </>
  );
}

export default CreateUser;
