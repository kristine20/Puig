"use client";

import Bio from "../components/home/Bio/Bio";
import Company from "../components/home/Company/Company";
import Footer from "../components/home/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import HistorySlider from "../components/home/History/History";
import Portfolio from "../components/home/Portfolio/Portfolio";
import ProductSlider from "../components/home/ProductSlider/Product-slider";

import img1914 from "../assets/images/history/1914.jpg";
import img1922 from "../assets/images/history/1922.jpg";
import img1940 from "../assets/images/history/1940.jpg";
import img1948 from "../assets/images/history/1948.jpeg";
import img1950 from "../assets/images/history/1950.jpeg";

export const historySliderItems = [
  {
    year: 1914,
    content: "Антонио Пуч Кастелло открывает компанию Antonio Puig S.A.",
    image: img1914,
  },
  {
    year: 1922,
    content: "В продажу поступает Milady, первая испанская губная помада.",
    image: img1922,
  },
  {
    year: 1940,
    content:
      "Запуск аромата Agua Lavanda Puig становится символом успеха компании",
    image: img1940,
  },
  {
    year: 1946,
    content: "Строительство новой фабрики и здания офиса в Барселоне.",
    image: "",
  },
  {
    year: 1948,
    content:
      "Запуск аромата L'Air du Temps. Позже Nina Ricci войдет в состав компании.",
    image: img1948,
  },
  {
    year: 1950,
    content: "Сыновья основателя присоединяются к семейному бизнесу.",
    image: img1950,
  },
  {
    year: 2021,
    content: "Pivoted to remote work",
    image: "",
  },
  {
    year: 2022,
    content: "Redesigned our product",
    image: "",
  },
  {
    year: 2023,
    content: "Hit record growth",
    image: "",
  },
  {
    year: 2024,
    content: "Launched new platform",
    image: "",
  },
];

const Main = () => {
  return (
    <>
      <Hero
        title={"PUIG LOVE BRANDS"}
        videoSrc={"/PUIG.mp4"}
        showPopup={true}
      />
      <div className="bio-section">
        <Bio />
      </div>
      <Company />
      <HistorySlider items={historySliderItems} title="История PUIG ―" />
      <Portfolio />
      <Footer />
      <ProductSlider />
    </>
  );
};

export default Main;
