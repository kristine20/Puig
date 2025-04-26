"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import arrow from "../../assets/images/arrow.png";
import "./History.css";

const items = [
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
      "Запуск аромата Agua Lavanda Puig становится символом успеха компании ",
  },
  {
    year: 1946,
    content:
      "Строительство новой фабрики и здания головного офиса компании в Барселоне на улице Travessera de Gràcia.",
  },
  {
    year: 1948,
    content:
      "Запуск аромата L'Air du Temps, ставший образцом для индустрии. Через 50 ет дом Nina Ricci войдет в состав компании Puig.",
  },
  {
    year: 1950,
    content:
      "Сыновья основателя (Антонио, Мариано, Жозе Мария и Энрике) присоединяются к семейному бизнесу. ",
  },
  { year: 2021, content: "Pivoted to remote work" },
  { year: 2022, content: "Redesigned our product" },
  { year: 2023, content: "Hit record growth" },
  { year: 2024, content: "Launched new platform" },
];

function History() {
  const [index, setIndex] = useState(0);
  const visibleCount = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const maxIndex = items.length - visibleCount;
        return prevIndex < maxIndex ? prevIndex + 1 : 0;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, items.length - visibleCount));
  };

  const visibleItems = items.slice(index, index + visibleCount);
  const [animationKeys, setAnimationKeys] = useState({});

  const restartAnimation = (i) => {
    setAnimationKeys((prev) => ({
      ...prev,
      [i]: (prev[i] || 0) + 1,
    }));
  };
  return (
    <section className="w-fixed pt-2 mb-80 history">
      <div className="row">
        <h2>История PUIG ― </h2>
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="history-button"
        >
          <Image src={arrow} alt="arrow" style={{ rotate: "180deg" }} />
        </button>
        <button
          onClick={handleNext}
          disabled={index >= items.length - visibleCount}
          className="history-button"
        >
          <Image src={arrow} alt="arrow" />
        </button>
        <motion.div className="history-slider-wrapper" layout>
          {visibleItems.map((item, i) => (
            <motion.div key={i} className="history-slider-item" layout>
              <div key={item.year} style={{ position: "relative" }}>
                <motion.div
                  className="slide-circle cursor-pointer"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3.3 }}
                  // onClick={() => toggleMedia(i)}
                >
                  <div
                    className="circle-wrapper"
                    onMouseEnter={() => restartAnimation(i)}
                  >
                    <svg
                      className="circle-svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      key={animationKeys[i] || 0}
                    >
                      <circle
                        className="circle-path"
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="#000"
                        strokeWidth="0.5"
                      />
                    </svg>
                    <p className="year">{item.year}</p>
                  </div>
                </motion.div>
                <p className="content">{item.content}</p>

                {i === visibleItems.length - 1 && (
                  <div className="infinite-line"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default History;
