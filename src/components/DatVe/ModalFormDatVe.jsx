import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { createVe } from "../../services/VeService";
import { toast } from "react-toastify";
import ThongBaoDatVe from "./ThongBaoDatVe";

import "./Modal.scss";
export default function ModalDatVe({ show, handleClose, tuyen }) {
  const [openModal, setOpenModal] = useState(false);
  const [maVe, setMaVe] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const [ngayDat, setNgayDat] = useState(today);
  const [tenTuyen, setTenTuyen] = useState("");

  const [slNL, setslNL] = useState(0);
  const [slTE, setslTE] = useState(0);
  const [donGiaNL, setDonGiaNL] = useState(0);
  const [donGiaTE, setDonGiaTE] = useState(0);
  const thanhTienNL = slNL * donGiaNL;
  const thanhTienTE = slTE * donGiaTE;
  const tongTien = thanhTienNL + thanhTienTE;

  const [formData, setFormData] = useState({
    ho_ten_khach: "",
    sdt: "",
    email: "",
    // so_nguoi_lon:"",
    // so_tre_em:"",
    // ngay_dat:"",
    tuyen_tham_quan_id: null,
  });

  useEffect(() => {
    if (tuyen) {
      setTenTuyen(tuyen.ten_tuyen_vi);
      setDonGiaNL(tuyen.gia_nguoi_lon);
      setDonGiaTE(tuyen.gia_tre_em);
      setFormData((prev) => ({
        ...prev,
        tuyen_tham_quan_id: tuyen.id,
      }));
    }
  }, [tuyen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!slNL && !slTE) {
      return toast.error("Phải có ít nhất 1 người lớn hoặc 1 trẻ em");
    }

    const dataSend = {
      ...formData,
      so_nguoi_lon: slNL,
      so_tre_em: slTE,
      ngay_dat: ngayDat,
    };
    try {
      const res = await createVe(dataSend);
      toast.success("Đặt vé thành công!");

      console.log("yui check res",res);
      setMaVe(res.data.data.ma_ve);
      setOpenModal(true);
      //reset
      setslNL(0);
      setslTE(0);
      setNgayDat(today);
      setFormData({
        ho_ten_khach: "",
        sdt: "",
        email: "",

        tuyen_tham_quan_id: tuyen?.id || null,
      });
      handleClose();
    } catch (err) {
      console.error(err);
      toast.error("Lỗi khi đặt vé!");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" className="ModalDatve">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đặt vé</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <h5>Thông tin khách hàng</h5>

              <div className="mb-3">
                <label>Họ tên:</label>
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="ho_ten_khach"
                  value={formData.ho_ten_khach}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Số điện thoại:</label>
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="sdt"
                  value={formData.sdt}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Email:</label>
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <h5> {tenTuyen}</h5>

              <table className="table">
                <thead>
                  <tr>
                    <th>Loại Vé</th>
                    <th>Ngày đặt</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>

                <tbody>
                  {/* <tr>
                    <td style={{width:"auto"}}>{tenTuyen}</td>
                  </tr> */}
                  <tr>
                    <td>Người lớn</td>
                    <td>
                      <input
                        type="date"
                        onChange={(e) => setNgayDat(e.target.value)}
                        value={ngayDat}
                      />
                    </td>
                    <td>{donGiaNL.toLocaleString()} VND</td>
                    <td>
                      <button
                        className="tanggiam btn btn-outline-secondary btn-sm"
                        onClick={() => setslNL(Math.max(0, slNL - 1))}
                      >
                        -
                      </button>
                      <span>{slNL}</span>
                      <button
                        className="tanggiam btn btn-outline-secondary btn-sm"
                        onClick={() => setslNL(slNL + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>{thanhTienNL.toLocaleString()} VND</td>
                  </tr>
                  <tr>
                    <td>Trẻ em</td>
                    <td>
                      <input
                        type="date"
                        name=""
                        id=""
                        onChange={(e) => setNgayDat(e.target.value)}
                        value={ngayDat}
                      />
                    </td>
                    <td>{donGiaTE.toLocaleString()} VND</td>
                    <td>
                      <button
                        className="tanggiam btn btn-outline-secondary btn-sm"
                        onClick={() => setslTE(Math.max(0, slTE - 1))}
                      >
                        -
                      </button>
                      <span>{slTE}</span>
                      <button
                        className="tanggiam btn btn-outline-secondary btn-sm"
                        onClick={() => setslTE(slTE + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>{thanhTienTE.toLocaleString()} VND</td>
                  </tr>
                </tbody>
              </table>

              <h5 className="mt-3">
                Tổng tiền: {tongTien.toLocaleString()} VND
              </h5>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>

          <Button variant="success" onClick={handleSubmit} >
            Đặt vé
          </Button>
        </Modal.Footer>
      </Modal>
      <ThongBaoDatVe
        show={openModal}
        handleClose={() => setOpenModal(false)}
        maVe={maVe}
      />
    </>
  );
}
