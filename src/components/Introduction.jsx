import "./Introduction.scss";
import images from "../assets/img";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function Introduction() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const iframe = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play
            iframe.contentWindow.postMessage(
              JSON.stringify({
                event: "command",
                func: "playVideo",
                args: "",
              }),
              "*"
            );
          } else {
            // Pause
            iframe.contentWindow.postMessage(
              JSON.stringify({
                event: "command",
                func: "pauseVideo",
                args: "",
              }),
              "*"
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="Introduction">
        <section className="trang-an-intro">
          <div className="content-left">
            <h2 className="title">{t("Introduction.Intro.tittle")}</h2>
            <p>{t("Introduction.Intro.text")}</p>
            <div className="btn">
              <div className="gach"></div>
              <button className="read-more">
                {t("Introduction.read-more")}
              </button>
            </div>
          </div>
          <div className="image-wrapper main-image-left">
            <img
              src={images["anhtrangan.png"]}
              alt="Cầu vào khu di tích Tràng An"
              className="main-image image-intro"
            />
          </div>
        </section>

        <div className="trang-an-ditich">
          <div className="image-wrapper main-image-top-right">
            <img
              src={images["codohoalu.jpg"]}
              alt="Thắng cảnh Tràng An"
              className="main-image image-ditich"
            />
          </div>
          <section className="trang-an-sights">
            <h2>{t("Introduction.Ditich.tittle")}</h2>
            <p>{t("Introduction.Ditich.text")}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="separator-text">{t("Introduction.Ditich.text2")}</p>
              <button className="read-more">
                {t("Introduction.read-more")}
              </button>
            </div>
            <div className="thumbnail-gallery small-gallery">
              <img
                src={images["thumb1.jpg"]}
                alt="Ảnh nhỏ phải 1"
                className="thumbnail"
              />
              <img
                src={images["thumb2.jpg"]}
                alt="Ảnh nhỏ phải 2"
                className="thumbnail"
              />
              <img
                src={images["thumb3.png"]}
                alt="Ảnh nhỏ phải 3"
                className="thumbnail"
              />
            </div>
            <div className="gach gach-ditich"></div>
          </section>
        </div>

        <div className="trang-an-disan">
          <section class="intangible-heritage">
            <h2>{t("Introduction.Disan.tittle")}</h2>
            <p>{t("Introduction.Disan.text")}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{t("Introduction.Disan.text2")}</p>
              <button class="read-more">{t("Introduction.read-more")}</button>
            </div>
            <div class="thumbnail-gallery">
              <img
                src={images["thumb4.jpg"]}
                alt="Ảnh nhỏ 1"
                class="thumbnail"
              />
              <img
                src={images["thumb5.jpeg"]}
                alt="Ảnh nhỏ 2"
                class="thumbnail"
              />
              <img
                src={images["thumb6.jpg"]}
                alt="Ảnh nhỏ 3"
                class="thumbnail"
              />
            </div>
            <div className="gach gach-disan"></div>
          </section>
          <div class="image-wrapper main-image-top-right">
            <img
              src={images["leruocnuoctaihoihoalu.jpg"]}
              alt="Thắng cảnh Tràng An"
              class="main-image image-disan"
            />
          </div>
        </div>
      </div>
      <div className="Media">
        <div class="media-section">
          <h2>{t("Introduction.media")}</h2>

          <div class="media-wrapper">
            <div class="video-box">
              <iframe
                ref={videoRef}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ax4H_FPvfE8?enablejsapi=1&mute=1&autoplay=1&controls=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div class="image-grid">
              <img src={images["media1.png"]} alt="" />
              <img src={images["media2.png"]} alt="" />
              <img src={images["media3.png"]} alt="" />
              <img src={images["media4.png"]} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
