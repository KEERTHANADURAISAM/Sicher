import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./pages/Navbar";
import ClientPage from "./pages/ClientPage";

// Page Components
// import Navbar from "./pages/Navbar";
import Features from "./pages/Features";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/TeamSection";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import AboutSection from "./pages/AboutSection";
// import ClientPage from "./pages/ClientPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
