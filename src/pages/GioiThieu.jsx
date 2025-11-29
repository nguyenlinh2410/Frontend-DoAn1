import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/GioiThieu/About";
import "./Homepage.css";
function Homepage() {
  return (
    <>
      <Header className="main-container"/>
      <div className="main-container"><About/></div>
      <Footer />
    </>
  );
}

export default Homepage;
