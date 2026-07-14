import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0806]">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </div>
  );
}