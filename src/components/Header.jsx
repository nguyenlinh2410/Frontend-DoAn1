import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CoVN from "../assets/icon/flagvi.png";
import CoVE from "../assets/icon/flagve.png";
import Logo from "../assets/img/logo.png";
import "./Header.css";


export default function Header() {
  const { t, i18n } = useTranslation();
 

  const [lang, setLang] = useState("vi");
  const toggleLanguage = () => {
    const newLang = lang === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Trang An Logo" />
          </a>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">{t("header.home")}</a>
            </li>
            <li>
              <a href="/about">{t("header.about")}</a>
            </li>
            <li>
              <a href="/di-tich">{t("header.heritage")}</a>
            </li>
            <li className="dropdown">
              <a
                href="/di-san"
                className="dropbtn"
                style={{ width: "107%" }}
                // onClick={() => navigator("/di-san")}
                
              >
                {t("header.culture")}{" "}
                <p style={{ rotate: "90deg", display: "inline-block" }}>
                  {">"}
                </p>
              </a>
              <div className="dropdown-content">
                <a href="/danh-muc/1">Lễ Hội</a>
                <a href="/danh-muc/2">Ẩm Thực</a>
                <a href="/danh-muc/3">Làng Nghề</a>
              </div>
            </li>
            <li>
              <a href="/dat-ve">{t("header.ticketInfo")}</a>
            </li>
            <li>
              <a href="/lien-he">{t("header.contact")}</a>
            </li>
          </ul>
        </nav>
        <div className="lang-icon" onClick={toggleLanguage}>
          <img
            src={lang === "vi" ? CoVN : CoVE}
            alt="language toggle"
            className="lang-flag"
          />
        </div>
      </div>
    </header>
  );
}
