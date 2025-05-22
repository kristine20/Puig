"use client";

import Bio from "../components/Bio/Bio";
import Company from "../components/Company/Company";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HistorySlider from "../components/History/History";
import Portfolio from "../components/Portfolio/Portfolio";
import ProductSlider from "../components/ProductSlider/Product-slider";

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
