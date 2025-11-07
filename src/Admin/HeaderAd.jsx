import { Link, useNavigate } from "react-router-dom";
import { getCurrentAdmin, logoutAdmin } from "../services/UserService";

import "./admin.css";
import { useEffect, useState } from "react";

export default function HeaderAd() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentAdmin = getCurrentAdmin();
    setAdmin(currentAdmin);
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  return (
    <header className="admin-header">
      <h1 className="admin-title">Admin Manager</h1>
      <nav>
        <Link to="/admin" className="admin-link">
          Dashboard
        </Link>
        <Link to="/disan" className="admin-link">
          Di Sản
        </Link>
        <Link to="/ditich" className="admin-link">
          Di Tích
        </Link>
        <Link to="/admin-mana" className="admin-link">
          Admin
        </Link>
        {admin && <span className="admin-link">Hello, {admin.name}</span>}
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
