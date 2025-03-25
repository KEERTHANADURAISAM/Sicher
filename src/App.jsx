import React, { useRef } from "react";
import Navbar from "./pages/Navbar";
import Features from "./pages/Features";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/TeamSection";
import Contact from "./pages/Contact";
import Header from "./pages/Header";

const App = () => {
  // Define refs for each section
  const sectionRefs = {
    Features: useRef(null),
    About: useRef(null),
    Services: useRef(null),
    Gallery: useRef(null),
    Testimonial: useRef(null),
    Team: useRef(null),
    Contact: useRef(null),
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <Header sectionRefs={sectionRefs} /> {/* ✅ Pass refs to Header */}
      <div ref={sectionRefs.Features}><Features /></div>
      <div ref={sectionRefs.About}><About /></div>
      <div ref={sectionRefs.Services}><Services /></div>
      <div ref={sectionRefs.Gallery}><Gallery /></div>
      <div ref={sectionRefs.Testimonial}><Testimonial /></div>
      <div ref={sectionRefs.Team}><Team /></div>
      <div ref={sectionRefs.Contact}><Contact /></div>
    </>
  );
};

export default App;
