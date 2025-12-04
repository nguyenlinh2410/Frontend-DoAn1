import "../admin.css";
import GetAllTuyen from "./getAllTuyen";

export default function TuyenThamQuan() {
  return (
    <>
      <header className="admin-header">
        <h1 className="admin-title">Các Tuyến Tham Quan</h1>
      </header>
      <GetAllTuyen />
    </>
  );
}
