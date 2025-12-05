import axios from "../axios";

// đặt URL API của backend
export const createVe = (formData) => {
  return axios.post("/api/ve/create", formData);
};

export const getAllVe = async () => {
  try {
    const res = await axios.get("/api/ve/getAllVe");
    return res.data;
  } catch (e) {
    console.error("Loi lay ds ve: ", e);
    return [];
  }
};

export const deleteVe = async (id) => {
  try {
    const res = await axios.delete(`/api/ve/deleteVe/${id}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi xoa ve", e);
    throw e;
  }
};