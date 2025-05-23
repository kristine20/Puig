"use client";

import Bio from "../components/home/Bio/Bio";
import Company from "../components/home/Company/Company";
import Footer from "../components/home/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import HistorySlider from "../components/home/History/History";
import Portfolio from "../components/home/Portfolio/Portfolio";
import ProductSlider from "../components/home/ProductSlider/Product-slider";

const historySliderItems = [
  {
    year: 1914,
    content: "Антонио Пуч Кастелло открывает компанию Antonio Puig S.A.",
  },
  {
    year: 1922,
    content: "В продажу поступает Milady, первая испанская губная помада.",
  },
  {
    year: 1940,
    content:
      "Запуск аромата Agua Lavanda Puig становится символом успеха компании",
  },
  {
    year: 1946,
    content: "Строительство новой фабрики и здания офиса в Барселоне.",
  },
  {
    year: 1948,
    content:
      "Запуск аромата L'Air du Temps. Позже Nina Ricci войдет в состав компании.",
  },
  {
    year: 1950,
    content: "Сыновья основателя присоединяются к семейному бизнесу.",
  },
  { year: 2021, content: "Pivoted to remote work" },
  { year: 2022, content: "Redesigned our product" },
  { year: 2023, content: "Hit record growth" },
  { year: 2024, content: "Launched new platform" },
];

const Main = () => {
  return (
    <>
      <Hero />
      <div className="bio-section">
        <Bio />
      </div>
      <Company />
      <ProductSlider />
      <HistorySlider items={historySliderItems} title="История PUIG ―" />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Main;
