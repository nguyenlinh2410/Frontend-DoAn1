import React, { useState, useEffect } from "react";
import HeaderAd from "../HeaderAd";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getDiSanById,
  updateDiSan,
  getDanhMuc,
} from "../../services/DiSanService";

export default function EditDiTich() {
  const { id } = useParams();
  const [danhmuc, setDanhmuc] = useState([]);
  const [disan, setDiSan] = useState({
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDanhmuc = async () => {
      try {
        const data = await getDanhMuc();
        setDanhmuc(data);
      } catch (e) {
        console.error("lỗi tải dm:", e);
      }
    };
    const fetchDiSan = async () => {
      try {
        const res = await getDiSanById(id);
        console.log("check res: ", res);
        setDiSan({
          tieu_de_vi: res.disan.tieu_de_vi,
          tieu_de_en: res.disan.tieu_de_en,
          slug: res.disan.slug,
          tom_tat_vi: res.disan.tom_tat_vi,
          tom_tat_en: res.disan.tom_tat_en,
          noi_dung_vi: res.disan.noi_dung_vi,
          noi_dung_en: res.disan.noi_dung_en,
          hinh_anh: res.disan.hinh_anh,
          danh_muc_id: res.disan.danh_muc_id,
        });
      } catch (e) {
        console.error("Loi load di san: ", e);
      }
    };
    fetchDanhmuc();
    fetchDiSan();
  }, [id]);

  const handleChange = (e) => {
    setDiSan({ ...disan, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDiSan(id, disan);
      toast.success("Update Di Sản thành công");
      navigate("/disan");
    } catch (e) {
      console.error("Loi khi cap nhat: ", e);
      toast.error("Lỗi update di sản");
    }
  };

  return (
    <>
      <HeaderAd />
      <div className="container-fluid p-4 ">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4 fw-bold">🏛️ UPDATE DI SAN</h2>

          <form onSubmit={handleUpdate} style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Danh muc:</label>
                <select
                  name="danh_muc_id"
                  value={disan.danh_muc_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Chọn danh mục --</option>
                  {danhmuc.map((dm) => {
                    return (
                      <option value={dm.id} key={dm.id}>
                        {dm.ten_danh_muc_vi}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Tiêu đề (Vi)</label>
                <textarea
                  type="text"
                  value={disan.tieu_de_vi}
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề tiếng Việt"
                  name="tieu_de_vi"
                ></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label">Tiêu đề (En)</label>
                <textarea
                  type="text"
                  value={disan.tieu_de_en}
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
                value={disan.slug}
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
                  value={disan.tom_tat_vi}
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
                  value={disan.tom_tat_en}
                  placeholder="Nhập tóm tắt tiếng Anh"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (Vi)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={disan.noi_dung_vi}
                  onEditorChange={(content) =>
                    setDiSan({ ...disan, noi_dung_vi: content })
                  }
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (En)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={disan.noi_dung_en}
                  className="form-control"
                  rows="5"
                  onEditorChange={(content) =>
                    setDiSan({ ...disan, noi_dung_en: content })
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
                value={disan.hinh_anh}
                placeholder="https://..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-30 py-2 mx-auto">
              Update di Sản
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
