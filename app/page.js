import Headers from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Company from "./components/Company";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import History from "./components/History";

export default function Home() {
  return (
    <div>
      <main className="w-full">
        <div className="row">
          <Headers />
        </div>
        <Hero />
        <div className="row">
          <Bio />
        </div>

        <Company />
        <Slider isVisible="true" />
        <History />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

