import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Index from "./Pages/Index";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Showcase from "./Pages/Showcase";
import Testmonials from "./Pages/Testmonials";
import Shopifydevelopment from "./Pages/Shopifydevelopment";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/testimonials" element={<Testmonials />} />
        <Route path="/shopifydevelopment" element={<Shopifydevelopment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
