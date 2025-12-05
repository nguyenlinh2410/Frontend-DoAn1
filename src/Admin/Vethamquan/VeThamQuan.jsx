import "../admin.css";
import GetAllVe from "./getAllVe";
export default function VeThamQuan() {
  return (
    <>
      <header className="admin-header">
        <h1 className="admin-title">Danh Sách Vé Tham Quan</h1>
      </header>
      <GetAllVe />
    </>
  );
}
