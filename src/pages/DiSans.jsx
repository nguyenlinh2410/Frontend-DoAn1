import Header from "../components/Header";
import Footer from "../components/Footer";
import DsDiSan from "../components/DiSan/DsDiSan";
import "./Homepage.css";

export default function DiSans() {
  return (
    <>
      <Header className="main-container" />
      <DsDiSan className="main-container"/>
      <Footer />
    </>
  );
}
