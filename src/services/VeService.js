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
export const getVeByMaVe = async (mave) => {
  try {
    const res = await axios.get(`/api/ve/getVeBuyTT/${mave}`);
    return res.data;
  } catch (e) {
    console.error("Loi khi lay ds ve theo tt", e);
    throw e;
  }
};

export const updateTrangThaiVe=(id,trang_thai)=>{
  axios.put(`/api/ve/updateTrangThai/${id}/trang_thai`,{trang_thai})
}

export const getThongKeVe = async () => {
  try {
    const res = await axios.get(`/api/ve/getVeThongKe`);
    return res.data;
  } catch (e) {
    console.error("Loi khi thong ke", e);
    throw e;
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

export const getTongDoanhThu = async () => {
  try {
    const res = await axios.get("/api/ve/getDoanhThu");
    return res.data;
  } catch (e) {
    console.error("Loi lay doanh thu ve: ", e);
    return [];
  }
};

export const getDoanhThuTheoNgay = async (ngay) => {
  try {
    const res = await axios.get(`/api/ve/getDoanhThuTheoNgay?ngay=${ngay}`);
    return res.data;
  } catch (e) {
    console.error("Loi lay doanh thu ve ngay: ", e);
    return [];
  }
};
