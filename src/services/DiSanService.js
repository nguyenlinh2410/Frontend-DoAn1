import axios from "../axios";

// đặt URL API của backend
export const createDiSan = (data) => {
  return axios.post("/api/disan/create", data);
};

export const getDanhMuc = async () => {
  try {
    const res = await axios.get("/api/disan/list");
    return res.data;
  } catch (e) {
    console.error("Loi lay danh muc: ", e);
    return [];
  }
};

export const getAllDiSan = async () => {
  try {
    const res = await axios.get("/api/disan/getAllDiSan");
    return res.data;
  } catch (e) {
    console.error("Loi lay ds: ", e);
    return [];
  }
};

export const deleteDiSan = async (id) => {
  try {
    const res = await axios.delete(`/api/disan/deleteDiSan/${id}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi xoa di tich", e);
    throw e;
  }
};

export const getDiSanById = async (id) => {
  const res = await axios.get(`/api/disan/getDiSan/${id}`);
  return res.data;
};

export const updateDiSan = async (id, data) => {
  const res = await axios.put(`/api/disan/updateDiSan/${id}`, data);
  return res.data;
};
