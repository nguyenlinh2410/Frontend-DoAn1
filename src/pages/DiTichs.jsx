import Header from "../components/Header";
import Footer from "../components/Footer";
import DsDiTich from "../components/DiTich/DsDiTich";
import "./Homepage.css";

export default function DiTichs() {
  return (
    <>
      <Header className="main-container" />
      <DsDiTich className="main-container"/>
      <Footer />
    </>
  );
}
