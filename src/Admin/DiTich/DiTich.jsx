import GetAllDiTich from "./getAllDiTich";
import "../admin.css";

export default function DiTich() {
  return (
    <>
      <header className="admin-header">
        <h1 className="admin-title">Di Tích và Thắng Cảnh</h1>
      </header>
      <GetAllDiTich />
    </>
  );
}
