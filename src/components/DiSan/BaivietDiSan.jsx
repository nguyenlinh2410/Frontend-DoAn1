import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDiSanBySlug } from "../../services/DiSanService";
import Header from "../Header";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

export default function BaivietDisan() {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  const [disan, setDiSan] = useState({
    noi_dung_vi: "",
    noi_dung_en: "",
    // slug:""
  });
  useEffect(() => {
    const fetchDiSan = async () => {
      try {
        const res = await getDiSanBySlug(slug);
        console.log("check res: ", res);

        setDiSan({
          noi_dung_vi: res.noi_dung_vi,
          noi_dung_en: res.noi_dung_en,
          // slug:res.ditich.slug
        });
      } catch (e) {
        console.error("Loi load disan: ", e);
      }
    };
    fetchDiSan();
  }, [slug]);
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "1130px",
          minWidth: "calc(100%-48px)",
          marginLeft: "auto",
          marginRight: "auto",
          height: "auto",
          marginBottom: "150px",
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              i18n.language === "vi" ? disan.noi_dung_vi : disan.noi_dung_en,
          }}
        />
      </div>
      <Footer />
    </>
  );
}
