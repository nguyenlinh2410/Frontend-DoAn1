import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDiTichBySlug } from "../../services/DiTichService";
import Header from "../Header";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

export default function BaivietDitich() {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  const [ditich, setDiTich] = useState({
    noi_dung_vi: "",
    noi_dung_en: "",
    // slug:""
  });
  useEffect(() => {
    const fetchDiTich = async () => {
      try {
        const res = await getDiTichBySlug(slug);
        console.log("check res: ", res);
        setDiTich({
          noi_dung_vi: res.ditich.noi_dung_vi,
          noi_dung_en: res.ditich.noi_dung_en,
          // slug:res.ditich.slug
        });
      } catch (e) {
        console.error("Loi load ditich: ", e);
      }
    };
    fetchDiTich();
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
              i18n.language === "vi" ? ditich.noi_dung_vi : ditich.noi_dung_en,
          }}
        />
      </div>
      <Footer />
    </>
  );
}
