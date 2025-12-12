import React, { useState, useEffect } from "react";
import {
  getTuyenById,
  updateTuyen,
  getImageTuyen,
} from "../../services/DatVeService";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditTuyenThamQuan() {
  const { id } = useParams();
  const [tuyen, setTuyen] = useState({
    ten_tuyen_vi: "",
    ten_tuyen_en: "",
    gia_nguoi_lon: "",
    gia_tre_em: "",
    hinh_anh: null,
    preview_image: getImageTuyen(id),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTuyen = async () => {
      try {
        const res = await getTuyenById(id);
        console.log("check res: ", res);
        setTuyen({
          ten_tuyen_vi: res.tuyen.ten_tuyen_vi,
          ten_tuyen_en: res.tuyen.ten_tuyen_en,
          gia_nguoi_lon: res.tuyen.gia_nguoi_lon,
          gia_tre_em: res.tuyen.gia_tre_em,
          hinh_anh: null,
          preview_image: getImageTuyen(res.tuyen.id),
        });
      } catch (e) {
        console.error("Loi load tuyen: ", e);
      }
    };
    fetchTuyen();
  }, [id]);

  const handleChange = (e) => {
    setTuyen({ ...tuyen, [e.target.name]: e.target.value });
  };

  const handlefileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setTuyen({
        ...tuyen,
        hinh_anh: e.target.files[0],
        preview_image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("ten_tuyen_vi", tuyen.ten_tuyen_vi);
      formData.append("ten_tuyen_en", tuyen.ten_tuyen_en);
      formData.append("gia_nguoi_lon", tuyen.gia_nguoi_lon);
      formData.append("gia_tre_em", tuyen.gia_tre_em);

      if (tuyen.hinh_anh instanceof File) {
        formData.append("hinh_anh", tuyen.hinh_anh);
      }

      await updateTuyen(id, formData);

      toast.success("Cập nhật tuyến thành công!");
      navigate("/admin/tuyen");
    } catch (error) {
      console.error("Lỗi update tuyến:", error);
      toast.error("Không thể cập nhật tuyến!");
    }
  };
  return (
    <>
      <div className=" ">
        <form onSubmit={handleUpdate} class="tour-form">
          <h2 style={{ textAlign: "center" }}>🏛️ UPDATE TUYEN</h2>

          <label>Tên tuyến (VI):</label>
          <input
            type="text"
            onChange={handleChange}
            name="ten_tuyen_vi"
            required
            value={tuyen.ten_tuyen_vi}
          />

          <label>Tên tuyến (EN):</label>
          <input
            type="text"
            name="ten_tuyen_en"
            onChange={handleChange}
            required
            value={tuyen.ten_tuyen_en}
          />

          <label>Giá vé người lớn:</label>
          <input
            type="number"
            name="gia_nguoi_lon"
            onChange={handleChange}
            required
            value={tuyen.gia_nguoi_lon}
          />

          <label>Giá vé trẻ em:</label>
          <input
            type="number"
            name="gia_tre_em"
            onChange={handleChange}
            required
            value={tuyen.gia_tre_em}
          />

          <label>Ảnh hiện tại:</label>
          <div>
            {tuyen.preview_image && (
              <img
                src={tuyen.preview_image}
                width="200"
                style={{ marginBottom: "10px", borderRadius: "10px" }}
                alt="preview"
              />
            )}
          </div>

          <label>Chọn Ảnh đại diện:</label>
          <input
            type="file"
            name="hinh_anh"
            onChange={handlefileChange}
          />

          <button type="submit">Lưu</button>
        </form>
      </div>
    </>
  );
}
