import Header from "../components/Header";
import Hero from "../components/Homepage/Hero";
import Attractions from "../components/Homepage/Attractions";
import Introduction from "../components/Homepage/Introduction";
import Footer from "../components/Footer";
import "./Homepage.css";
function Homepage() {
  return (
    <>
      <Header className="main-container" />
      <Hero />
      <div className="main-container">
        <Attractions />
        <Introduction />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
