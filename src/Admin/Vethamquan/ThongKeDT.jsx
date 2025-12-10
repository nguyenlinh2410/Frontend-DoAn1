import { useEffect, useState } from "react";
import { getTongDoanhThu, getDoanhThuTheoNgay } from "../../services/VeService";

export default function ThongKeDT() {
  const [tong, setTong] = useState(0);
  const [tongngay, setTongNgay] = useState(0);
  const [theoNgay, setTheoNgay] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchTong();
  }, []);

  const fetchTong = async () => {
    try {
      const res = await getTongDoanhThu();
      console.log("check tong: ", res);
      setTong(res);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTheoNgay = async () => {
    if (!date) return;
    try {
      const res = await getDoanhThuTheoNgay(date);
      console.log("check dtngay: ", res);
      setTheoNgay(res.data);
      setTongNgay(res.doanhThu);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Thống kê doanh thu</h2>

      <div className="row g-4">
        {/* Tổng doanh thu */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h6 className="text-muted">Tổng doanh thu</h6>
              <h3 className="fw-bold mt-2">{tong.doanhThu} đ</h3>
            </div>
          </div>
        </div>

        {/* Lọc theo ngày */}
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Doanh thu theo ngày</h6>

              <div className="d-flex gap-3 mb-3">
                <input
                  type="date"
                  className="form-control"
                  style={{ maxWidth: "200px" }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <button onClick={fetchTheoNgay} className="btn btn-primary">
                  Lọc
                </button>
              </div>

              <div
                className="table-responsive"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Mã vé</th>
                      <th>Khách hàng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                    {theoNgay.map((ve, i) => (
                      <tr key={i}>
                        <td>{ve.ma_ve}</td>
                        <td>{ve.ho_ten_khach}</td>
                        <td className="fw-bold text-success">
                          {ve.tong_tien} đ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Tong-ngay">Tổng Doanh Thu Ngày: {tongngay}</div>
    </div>
  );
}
