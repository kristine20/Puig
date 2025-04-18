import Headers from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Bio from "./components/Bio/Bio";
import Company from "./components/Company/Company";
import Portfolio from "./components/Portfolio/Portfolio";

import Slider from "./components/Slider/Slider";
import History from "./components/History/History";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <main className="w-full">
        <div className="row">
          <Headers />
        </div>
        <Hero />
        <div className="bio-section">
          <Bio />
        </div>

        <Company />
        <Slider />
        <History />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

