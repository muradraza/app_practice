import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Index from "./Pages/Index";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
