import React, { useState } from "react";
import { createTuyen } from "../../services/DatVeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AddTuyenThamQuan.css";
export default function AddTuyenThamQuan() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ten_tuyen_vi: "",
    ten_tuyen_en: "",
    gia_nguoi_lon: "",
    gia_tre_em: "",
    hinh_anh: "",
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
  const { name, files, value } = e.target;

  // Nếu input là file
  if (name === "hinh_anh") {
    setFormData({ ...formData, hinh_anh: files[0] });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await createTuyen(formData);
  //     toast.success("Thêm tuyen thành công!");
  //     console.log(res.data);
  //     setFormData({
  //       ten_tuyen_vi: "",
  //       ten_tuyen_en: "",
  //       gia_nguoi_lon: "",
  //       gia_tre_em: "",
  //       hinh_anh: null,
  //     });
  //     navigate("/admin/tuyen-tham-quan");
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Lỗi khi thêm tuyen!");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("ten_tuyen_vi", formData.ten_tuyen_vi);
  data.append("ten_tuyen_en", formData.ten_tuyen_en);
  data.append("gia_nguoi_lon", formData.gia_nguoi_lon);
  data.append("gia_tre_em", formData.gia_tre_em);
  data.append("hinh_anh", formData.hinh_anh);

  try {
    const res = await createTuyen(data); // gửi FormData
    console.log('check res tuyen: ',res)
    toast.success("Thêm tuyến thành công!");
    navigate("/admin/tuyen-tham-quan");
  } catch (err) {
    console.log(err);
    toast.error("Lỗi khi thêm tuyến!");
  }
};

  return (
    <>
      <div className=" ">
        <form
          onSubmit={handleSubmit} 
          class="tour-form"
        >
          <h2 style={{textAlign:"center"}}>🏛️ CREATE TUYEN</h2>

          <label>Tên tuyến (VI):</label>
          <input type="text" onChange={handleChange} name="ten_tuyen_vi" required />

          <label>Tên tuyến (EN):</label>
          <input type="text" name="ten_tuyen_en" onChange={handleChange} required />

          <label>Giá vé người lớn:</label>
          <input type="number" name="gia_nguoi_lon" onChange={handleChange} required />

          <label>Giá vé trẻ em:</label>
          <input type="number" name="gia_tre_em" onChange={handleChange} required />

          <label>Ảnh đại diện:</label>
          <input type="file" name="hinh_anh" onChange={handleChange}required />

          <button type="submit">Lưu</button>
        </form>
      </div>
    </>
  );
}
