import "./App.css";
import Navbar from "@/page/navbar/Navbar";
import Home from "@/page/home/Home";
import About from "@/page/about/About";
import Page from "@/page/page-item/Page";
import Portfolio from "@/page/portfolio/Portfolio";
import Contact from "@/page/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
