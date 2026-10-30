import { Nav, Hero, About, Services, Pricing, Reviews, Faq, Footer, WhatsApp } from "./components/Sections.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

// To add a new section: create a component and drop it in here.
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Pricing />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}
