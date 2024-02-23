import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyIEEE from "./components/WhyIEEE/WhyIEEE";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyIEEE />
    </>
  );
}

export default App;
