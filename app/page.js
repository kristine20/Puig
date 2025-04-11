import Image from "next/image";
// import styles from "./page.module.css";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Company from "./components/Company";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

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

        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

