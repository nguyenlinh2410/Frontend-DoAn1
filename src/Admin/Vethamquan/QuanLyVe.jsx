import React, { useState, useEffect } from "react";
import { Check, X, Clock, Search, Filter } from "lucide-react";
import { getAllVe, updateTrangThaiVe } from "../../services/VeService.js";
import "./QuanLyVe.scss";

import GetTKVe from "./getTKVe.jsx";

export default function QuanLyVe() {
  const [ves, setVe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getAllVe();
    console.log("check ve: ", data);
    setVe(data);
  };

  const filteredVes = ves.filter((ve) => {
  // Lọc theo trạng thái
  const matchFilter =
    filter === "all" ? true : ve.trang_thai === filter;

  // Tìm kiếm theo mã vé, tên khách, sđt
  const lower = searchTerm.toLowerCase();
  const matchSearch =
    ve.ma_ve.toLowerCase().includes(lower) ||
    ve.ho_ten_khach.toLowerCase().includes(lower) ||
    ve.sdt.toLowerCase().includes(lower);

  return matchFilter && matchSearch;
});

  const handleConfirm = async (id) => {
    if (!window.confirm("Xác nhận ves này?")) return;

    await updateTrangThaiVe(id, "da_xac_nhan");
    fetchUsers();
  };
  const handleCancel = async (id) => {
    if (!window.confirm("Bạn muốn hủy vế này?")) return;

    await updateTrangThaiVe(id, "da_huy");
    fetchUsers();
  };

  const getTrangThaiDisplay = (trangThai) => {
    switch (trangThai) {
      case "cho_xac_nhan":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "3px",
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: "600",
              backgroundColor: "#fef3c7",
              color: "#92400e",
              border: "1px solid #fde047",
            }}
          >
            Chờ xác nhận
          </span>
        );
      case "da_xac_nhan":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "3px",
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: "600",
              backgroundColor: "#d1fae5",
              color: "#065f46",
              border: "1px solid #34d399",
            }}
          >
            Đã xác nhận
          </span>
        );
      case "da_huy":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "3px",
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: "600",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              border: "1px solid #fca5a5",
            }}
          >
            Đã hủy
          </span>
        );
      default:
        return <span>{trangThai}</span>;
    }
  };

  // const handleDelete = async (id) => {
  //     try {
  //       await deleteVe(id);
  //       fetchUsers(); //load lai danh sach
  //     } catch (e) {
  //       console.log("err delete di tich", e);
  //     }
  //   };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Statistics */}
        <GetTKVe />

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo mã vé, tên khách, SĐT..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">Tất cả</option>
                <option value="cho_xac_nhan">Chờ xác nhận</option>
                <option value="da_xac_nhan">Đã xác nhận</option>
                <option value="da_huy">Đã hủy</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <table className=" bangve">
          <tr>
            <th>Mã Vé</th>
            <th>Khách Hàng</th>
            <th>Tuyến</th>
            <th>Ngày Đặt</th>
            <th>Số Khách</th>
            <th>Tổng Tiền</th>
            <th>Trạng Thái</th>
            <th>Action</th>
          </tr>
          {filteredVes.length > 0 ? (
            filteredVes.map((ve, index) => (
              <tr key={index}>
                <td>{ve.ma_ve}</td>
                <td>
                  {ve.ho_ten_khach} {ve.sdt}
                </td>
                <td>{ve.tuyen_tham_quan.ten_tuyen_vi}</td>
                <td>{ve.ngay_dat}</td>
                <td>
                  {ve.so_nguoi_lon}NL, {ve.so_tre_em}TE
                </td>
                <td>{ve.tong_tien}</td>
                <td>{getTrangThaiDisplay(ve.trang_thai)}</td>
                <td className="btn-action">
                  {ve.trang_thai==='cho_xac_nhan'?(<>
                    <button
                    className="check-btn"
                    onClick={() => handleConfirm(ve.id)}
                  >
                    Xác Nhận
                  </button>
                  <button
                    className="huy-btn"
                    onClick={() => handleCancel(ve.id)}
                    //  onClick={() => handleDelete(ve.id)}
                  >
                    Huỷ
                  </button>
                  </>
                 ):ve.trang_thai==='da_xac_nhan'?(
                  <span className="text-green-600 font-semibold">Đã xác nhận</span>
                 ):(
                  <span className="text-red-600 font-semibold">Đã Hủy</span>
                 )}
                
                </td>
              </tr>
            ))
          ) : (
            <tr>Không có Di tich</tr>
          )}
        </table>
      </div>
    </div>
  );
}
