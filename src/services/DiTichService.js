import axios from "../axios";

// đặt URL API của backend
export const createDiTich = (data) => {
  return axios.post("/api/ditich/create", data);
};

export const getAllDiTich = async () => {
  try {
    const res = await axios.get("/api/ditich/getAllDiTich");
    return res.data;
  } catch (e) {
    console.error("Loi lay ditich: ", e);
    return [];
  }
};

export const deleteDiTich = async (id) => {
  try {
    const res = await axios.delete(`/api/ditich/deleteDiTich/${id}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi xoa di tich", e);
    throw e;
  }
};

export const getDiTichById = async (id) => {
  const res = await axios.get(`/api/ditich/getDiTich/${id}`);
  return res.data;
};

export const updateDiTich = async (id, data) => {
  const res = await axios.put(`/api/ditich/updateDiTich/${id}`, data);
  return res.data;
};
