import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Body from "../Body/Body.jsx";
import "./LandingPage.scss";
// import Carousel from "react-bootstrap/Carousel";
function LandingPage() {
  return (
    <div className="landing_page">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default LandingPage;
