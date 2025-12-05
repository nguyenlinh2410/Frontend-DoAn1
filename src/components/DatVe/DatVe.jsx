import Header from "../../components/Header";
import Footer from "../../components/Footer";
import veheader from "../../assets/img/veheader.png";
import DsTuyen from './DsTuyen'
export default function DatVe() {
  return (
    <>
      <Header />
      <img
        src={veheader}
        alt="Trang An"
        style={{ width: "100vw", height: "80vh", marginBottom:"10px", objectFit:"cover" }}
      />
      <DsTuyen/>
      <Footer />
    </>
  );
}
