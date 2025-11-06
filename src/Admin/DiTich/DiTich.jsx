import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../services/UserService";
import GetAllDiTich from "./getAllDiTich";
import "../admin.css";

export default function HeaderAd() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };
  return (
    <>
        <header className="admin-header">
          <h1 className="admin-title">Admin Manager</h1>
          <nav>
            <Link to="/admin" className="admin-link">
              Dashboard
            </Link>
            <Link to="/ditich/create" className="admin-link">
              Create DiTich
            </Link>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </header>
        <GetAllDiTich/>
    </>
  );
}
