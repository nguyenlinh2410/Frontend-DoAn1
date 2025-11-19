import "./Footer.scss";
import images from "../assets/img";
import { useTranslation } from "react-i18next";
import { createLienHe } from "../services/UserService";
import React, { useState } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createLienHe({ name, phone, email });
      console.log("user created: ", res.data);
      alert("User created successfully!");

      setName("");
      setEmail("");
      setPhone("");
    } catch (e) {
      console.error("Error creating user: ", e);
      alert("Error");
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <!-- LEFT --> */}
        <div className="footer-left">
          <div className="logo">
            <img src={images["logo.png"]} alt="Trang An" />
            {/* <h2>Tràng An</h2> */}
          </div>

          <p className="desc">{t("Footer.desc")}</p>

          <ul className="info-list">
            <li>
              <p>
                <svg
                  style={{ width: "20px", height: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                >
                  <path d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z" />
                </svg>{" "}
                {t("Footer.adress")}
              </p>
            </li>
            <li>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: "20px", height: "20px" }}
                  fill="white"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>{" "}
                sales@disantrangan.com
              </p>
            </li>
            <li>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: "20px", height: "20px" }}
                  fill="white"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>{" "}
                19009251
              </p>
            </li>
            <li>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: "20px", height: "20px" }}
                  fill="white"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>{" "}
                {t("Footer.fb")}
              </p>
            </li>
          </ul>
        </div>

        <div className="footer-content_right">
          {/* <!-- RIGHT --> */}
          <div className="footer-right">
            <p>{t("Footer.tittle")}</p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Footer.name")}
              style={{ marginTop: "20px", marginBottom: "2px" }}
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder={t("Footer.phone")}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={t("Footer.email")}
            />

            {/* <label className="checkbox">
              <input type="checkbox" />
              Tôi đồng ý với các điều khoản và điều kiện
            </label> */}

            <button className="send-btn" onClick={handleSubmit}>{t("Footer.send")}</button>
          </div>

          {/* <!-- MAP --> */}
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14972.594880024813!2d105.918259!3d20.252666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367962d4d0d42f%3A0x6453c0ecf99fd572!2zS2h1IGR1IGzhu4tjaCBzaW5oIHRow6FpIFRyw6BuZyBBbg!5e0!3m2!1svi!2sus!4v1763367601447!5m2!1svi!2sus"
              width="100%"
              height="100%"
              //   style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2025 ©© Bản quyền thuộc Ban quản lý Quần thể danh thắng
          Tràng An
        </p>
        <p>
          Giấy phép số: 01/GP-TTDT do Sở Thông tin và Truyền thông Ninh Bình cấp
          ngày 26/8/2020
        </p>
      </div>
    </footer>
  );
}
