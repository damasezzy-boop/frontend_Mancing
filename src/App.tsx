import NoiseOverlay from "./components/NoiseOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import SpotSection from "./components/SpotSection";
import CatchSection from "./components/CatchSection";
import EventSection from "./components/EventSection";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SpotSection />
        <CatchSection />
        <EventSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}