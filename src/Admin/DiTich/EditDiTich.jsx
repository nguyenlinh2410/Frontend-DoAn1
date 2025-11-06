import React, { useState, useEffect } from "react";
import { getDiTichById, updateDiTich } from "../../services/DiTichService";
import HeaderAd from "../HeaderAd";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditDiTich() {
  const { id } = useParams();
  const [ditich, setDiTich] = useState({
    tieu_de_vi: "",
    tieu_de_en: "",
    slug: "",
    tom_tat_vi: "",
    tom_tat_en: "",
    noi_dung_vi: "",
    noi_dung_en: "",
    hinh_anh: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiTich = async () => {
      try {
        const res = await getDiTichById(id);
        console.log("check res: ", res);
        setDiTich({
          tieu_de_vi: res.ditich.tieu_de_vi,
          tieu_de_en: res.ditich.tieu_de_en,
          slug: res.ditich.slug,
          tom_tat_vi: res.ditich.tom_tat_vi,
          tom_tat_en: res.ditich.tom_tat_en,
          noi_dung_vi: res.ditich.noi_dung_vi,
          noi_dung_en: res.ditich.noi_dung_en,
          hinh_anh: res.ditich.hinh_anh,
        });
      } catch (e) {
        console.error("Loi load user: ", e);
      }
    };
    fetchDiTich();
  }, [id]);

  const handleChange = (e) => {
    setDiTich({ ...ditich, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDiTich(id, ditich);
      toast.success('Update Di Tich thành công')
      navigate("/ditich");
    } catch (e) {
      console.error("Loi khi cap nhat: ", e);
      toast.error('Lỗi update di tích')
    }
  };

  
  console.log("dl di tich: ", ditich);
  return (
    <>
      <HeaderAd />
      <div className="container-fluid p-4 ">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4 fw-bold">🏛️ UPDATE DI TICH</h2>

          <form onSubmit={handleUpdate} style={{ width: "100%" }}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Tiêu đề (Vi)</label>
                <textarea
                  type="text"
                  value={ditich.tieu_de_vi}
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
                  value={ditich.tieu_de_en}
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
                value={ditich.slug}
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
                  value={ditich.tom_tat_vi}
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
                  value={ditich.tom_tat_en}
                  placeholder="Nhập tóm tắt tiếng Anh"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (Vi)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={ditich.noi_dung_vi}
                  onEditorChange={(content) =>
                    setDiTich({ ...ditich, noi_dung_vi: content })
                  }
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nội dung (En)</label>
                <Editor
                  apiKey="n6f2ezvfe4bkxgvypbnzhms8rkbapw8xhd0bs9rzz5w8jnb2"
                  value={ditich.noi_dung_en}
                  className="form-control"
                  rows="5"
                  onEditorChange={(content) =>
                    setDiTich({ ...ditich, noi_dung_en: content })
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
                value={ditich.hinh_anh}
                placeholder="https://..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-30 py-2 mx-auto">
              Update di tích
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
