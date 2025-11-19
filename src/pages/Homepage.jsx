import Header from "../components/Header";
import Hero from "../components/Hero";
import Attractions from "../components/Attractions";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import "./Homepage.css";
function Homepage() {
  return (
    <>
      <Header className="main-container"/>
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
