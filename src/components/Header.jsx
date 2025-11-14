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
              <a href="#">{t("header.about")}</a>
            </li>
            <li>
              <a href="#">{t("header.heritage")}</a>
            </li>
            <li>
              <a href="#" style={{width:"118%"}}>{t("header.culture")}</a>
            </li>
            <li>
              <a href="#">{t("header.ticketInfo")}</a>
            </li>
            <li>
              <a href="#">{t("header.contact")}</a>
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
