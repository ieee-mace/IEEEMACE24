import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyIEEE from "./components/WhyIEEE/WhyIEEE";
import About from "./components/About/About";
import Count from "./components/Count/Count";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Chapters from "./components/Chapters/Chapters";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyIEEE />
      <About />
      <Count />
      <Gallery />
      <Chapters />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
