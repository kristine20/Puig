import Portfolio from "./components/Portfolio/Portfolio";
import History from "./components/History/History";
import Company from "./components/Company/Company";
import Headers from "./components/Header/Header";
import ProductSlider from "./components/ProductSlider/Product-slider";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Bio from "./components/Bio/Bio";

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
        <ProductSlider />
        <History />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

