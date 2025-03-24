import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Gallery from "./pages/Gallery";
import { Header } from "./pages/Header";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import TeamSection from "./pages/TeamSection";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonial/>
      <TeamSection/>
      <Contact/>
    </>
  );
}

export default App;
