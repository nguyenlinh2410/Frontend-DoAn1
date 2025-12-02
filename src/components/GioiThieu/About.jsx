import React from "react";
import "./About.css";
import images from "../../assets/img";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="gioithieu">
      <div className="main-container">
        <div className="video">
          <iframe
            width="950"
            height="500"
            src="https://www.youtube.com/embed/Nv55_Mzy4J8?si=7vS8h75wqvoq974X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="container1">
          <h1 className="title1">{t("Gioithieu.title1")}</h1>
        </div>

        <h2 className="intro-title2">{t("Gioithieu.intro-title2")}</h2>
        <div className="container2">
          <p className="title2">
            <p>{t("Gioithieu.title21")}</p>
            <p>{t("Gioithieu.title22")}</p>
            <p>{t("Gioithieu.title23")}</p>
            <p>{t("Gioithieu.title24")}</p>
          </p>
        </div>
        <img
          className="anhgioithieu"
          src={images["anh1gioithieu.jpg"]}
          alt="anh gioi thieu"
        />

        <hr />
        {/* <!-- ==================UNESCO================== --> */}
        <h2 className="intro-title3">{t("Gioithieu.intro-title3")}</h2>
        <div className="container3">
          <p className="title3">
            <p>{t("Gioithieu.title31")}</p>
            <p>{t("Gioithieu.title32")}</p>

            <p>{t("Gioithieu.title33")}</p>

            <p>{t("Gioithieu.title34")}</p>
          </p>
        </div>
        <img
          className="anhunesco"
          src={images["anh2gioithieu.jpg"]}
          alt="anh UNESCO"
        />
        <hr />

        {/* <!-- ==================NÉT HẤP DẪN ================== --> */}
        <h2 className="intro-title4">{t("Gioithieu.intro-title4")}</h2>
        <div className="container-hapdan">
          <div className="grid-container1">
            <div className="content">
              <h3>{t("Gioithieu.title41")}</h3>
              <p>{t("Gioithieu.title42")}</p>
            </div>
            <div className="content">
              <h3>{t("Gioithieu.title43")}</h3>
              <p>{t("Gioithieu.title44")}</p>
            </div>
          </div>
          <div className="center-dot">
            <div className="linehorizontal"></div>
            <div className="linevertical"></div>
            <div className="dot"></div>
          </div>
          <div className="grid-container2">
            <div className="content">
              <h3>{t("Gioithieu.title45")}</h3>
              <p>{t("Gioithieu.title46")}</p>
            </div>
            <div className="content">
              <h3>{t("Gioithieu.title47")}</h3>
              <p>{t("Gioithieu.title48")}</p>
            </div>
          </div>
        </div>
        <img
          className="nethapdan"
          src={images["gioithieu.jpg"]}
          alt="anh net hap dan"
        />
        {/* <!-- ======================lý do nổi tiếng==================== --> */}
        <h2 className="intro-title5">Lý do Tràng An trở nên nổi tiếng</h2>
        <div className="container-noitieng">
          <div className="col-left">
            <img
              className="anhleft1"
              src={images["anhcolleft1.jpg"]}
              alt="anh noi tieng 1"
            />
            <img
              className="anhleft2"
              src={images["anhcolleft2.jpg"]}
              alt="anh noi tieng 2"
            />
          </div>
          <div className="col-right">
            <p className="content1">
              <span className="first-word">{t("Gioithieu.first-word")}</span>
              {t("Gioithieu.title51")}
            </p>
            <img
              className="anhright"
              src={images["anhcolright.jpg"]}
              alt="anh noi tieng 3"
            />
            <p className="content2">{t("Gioithieu.title52")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
