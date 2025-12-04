import axios from "../axios";

// đặt URL API của backend
export const createTuyen = (formData) => {
  return axios.post("/api/datve/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getAllTuyen = async () => {
  try {
    const res = await axios.get("/api/datve/getAllTuyen");
    return res.data;
  } catch (e) {
    console.error("Loi lay ds tuyen: ", e);
    return [];
  }
};
export const getImageTuyen = (id) =>
  `http://localhost:8000/api/datve/${id}/image`;

export const deleteTuyen = async (id) => {
  try {
    const res = await axios.delete(`/api/datve/deleteTuyen/${id}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi xoa tuyen", e);
    throw e;
  }
};

export const getTuyenById = async (id) => {
  const res = await axios.get(`/api/datve/getTuyen/${id}`);
  return res.data;
};

export const updateTuyen = async (id, data) => {
  try {
    const res = await axios.put(`/api/datve/updateTuyen/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (e) {
    console.error("Lỗi update tuyến: ", e);
    throw e;
  }
};
