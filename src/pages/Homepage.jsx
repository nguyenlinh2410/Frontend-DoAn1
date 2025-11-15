import Header from "../components/Header";
import Hero from "../components/Hero";
import Attractions from "../components/Attractions";
import Introduction from "../components/Introduction";
import "./Homepage.css";
function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <div className="main-container">
        <Attractions />
        <Introduction />
      </div>
    </>
  );
}

export default Homepage;
