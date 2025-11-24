import "../admin.css";
import GetAllDiSan from "./getAllDiSan";
export default function DiSan() {
  return (
    <>
      <header className="admin-header">
        <h1 className="admin-title">Di Sản Văn Hóa</h1>
      </header>
      <GetAllDiSan />
    </>
  );
}
