import axios from "../axios";

// đặt URL API của backend
export const createLienHe = (data) => {
  return axios.post("/api/create/lienhe", data);
};
export const createUser = (data) => {
  return axios.post("/api/create/users", data);
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get("/api/getAllusers");
    return res.data;
  } catch (e) {
    console.error("Loi lay user: ", e);
    return [];
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`/api/deleteUser/${id}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi xoa user", e);
    throw e;
  }
};

export const getUserById = async (id) => {
  const res = await axios.get(`/api/getUser/${id}`);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await axios.put(`/api/updateUser/${id}`, data);
  return res.data;
};

//Login
export const loginAdmin = async (email, password) => {
  try {
    const res = await axios.post(`/login`, { email, password });
    //lưu thông tin vào localstorage
    localStorage.setItem("admin", JSON.stringify(res.data.admin));
    return res.data;
  } catch (e) {
    console.log("Lỗi loginAdmin", e);
    throw e;
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin");
};

export const getCurrentAdmin = () => {
  const admin = localStorage.getItem("admin");
  if (!admin || admin === "undefined" || admin === "null") return null;
  try {
    return JSON.parse(admin);
  } catch (e) {
    console.error("Lỗi parse JSON admin:", e);
    return null;
  }
};
