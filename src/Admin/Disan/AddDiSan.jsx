import React, { useState, useEffect } from "react";
import HeaderAd from "../HeaderAd";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDanhMuc, createDiSan } from "../../services/DiSanService";
export default function AddDiTich() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tieu_de_vi: "",
    tieu_de_en: "",
    slug: "",
    tom_tat_vi: "",
    tom_tat_en: "",
    noi_dung_vi: "",
    noi_dung_en: "",
    hinh_anh: "",
    danh_muc_id: "",
  });
  const [danhmuc, setDanhmuc] = useState([]);
  useEffect(() => {
    fetchDanhmuc();
  }, []);

  const fetchDanhmuc = async () => {
    const data = await getDanhMuc();
    setDanhmuc(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createDiSan(formData);
      toast.success("Thêm di sản thành công!");
      console.log(res.data);
      setFormData({
        tieu_de_vi: "",
        tieu_de_en: "",
        slug: "",
        tom_tat_vi: "",
        tom_tat_en: "",
        noi_dung_vi: "",
        noi_dung_en: "",
        hinh_anh: "",
        danh_muc_id: "",
      });
      navigate("/disan");
    } catch (err) {
      console.error(err);
      toast.error("Lỗi khi thêm di sản!");
    }
  };
  console.log("check danh muc: ", danhmuc);
  return (
    <>
      <HeaderAd />
      <div className="container-fluid p-4 ">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4 fw-bold">🏛️ CREATE DI SAN</h2>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Danh muc:</label>
                <select
                  name="danh_muc_id"
                  value={formData.danh_muc_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Chọn danh mục --</option>
                  {danhmuc.map((dm) => {
                    return(
                    <option value={dm.id} key={dm.id}>
                      {dm.ten_danh_muc_vi}
                    </option>)
                  })}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Tiêu đề (Vi)</label>
                <textarea
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề tiếng Việt"
                  name="tieu_de_vi"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Tiêu đề (En)</label>
                <textarea
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề tiếng Anh"
                  name="tieu_de_en"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Slug</label>
              <textarea
                name="slug"
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="vd: chua-bai-dinh"
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Tóm tắt (Vi)</label>
                <textarea
                  name="tom_tat_vi"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  placeholder="Nhập tóm tắt tiếng Việt"
                ></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label">Tóm tắt (En)</label>
                <textarea
                  name="tom_tat_en"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  placeholder="Nhập tóm tắt tiếng Anh"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (Vi)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={formData.noi_dung_vi}
                  onEditorChange={(content) =>
                    setFormData({ ...formData, noi_dung_vi: content })
                  }
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (En)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={formData.noi_dung_en}
                  className="form-control"
                  rows="5"
                  onEditorChange={(content) =>
                    setFormData({ ...formData, noi_dung_en: content })
                  }
                  placeholder="Nhập nội dung tiếng Anh"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Hình ảnh (URL)</label>
              <textarea
                name="hinh_anh"
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-30 py-2">
              Thêm di tích
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
