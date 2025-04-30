"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import arrow from "../../assets/images/arrow.png";
import "./History.css";
import { useWindowWidth } from "@/app/hooks";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKeys, setAnimationKeys] = useState({});
  const width = useWindowWidth();

  const visibleCount = width && width <= 480 ? 2 : 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActive) => {
        const nextActive = (prevActive + 1) % items.length;

        // update visible group if activeIndex moved outside
        if (nextActive >= index + visibleCount) {
          setIndex(nextActive - visibleCount + 1);
        } else if (nextActive < index) {
          setIndex(nextActive);
        }

        return nextActive;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const newActive = Math.max(prev - 1, 0);
      if (newActive < index) {
        setIndex(newActive);
      }
      return newActive;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newActive = Math.min(prev + 1, items.length - 1);
      if (newActive >= index + visibleCount) {
        setIndex(newActive - visibleCount + 1);
      }
      return newActive;
    });
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold && activeIndex < items.length - 1) {
      handleNext();
    } else if (info.offset.x > threshold && activeIndex > 0) {
      handlePrev();
    }
  };

  const visibleItems = items.slice(index, index + visibleCount);

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
          disabled={activeIndex === 0}
          className="history-button"
        >
          <Image src={arrow} alt="arrow" style={{ rotate: "180deg" }} />
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === items.length - 1}
          className="history-button"
        >
          <Image src={arrow} alt="arrow" />
        </button>

        {/* <motion.div
          className="history-slider-wrapper"
          layout
          // drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          // dragElastic={0.2}
          // onDragEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onPanEnd={handleDragEnd}
        >
          {visibleItems.map((item, i) => {
            const globalIndex = index + i;
            const isActive = globalIndex === activeIndex;

            return (
              <motion.div
                key={item.year}
                className="history-slider-item"
                layout
              >
                <div style={{ position: "relative" }}>
                  <motion.div
                    className="slide-circle cursor-pointer"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3.3 }}
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
                      <p className={`year ${isActive ? "active" : ""}`}>
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                  <p className="content">{item.content}</p>
                  {i === visibleItems.length - 1 && (
                    <div className="infinite-line"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div> */}
        {/* <motion.div
          className="history-slider-wrapper"
          animate={{ x: `-${activeIndex * (100 / visibleCount)}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{
            display: "flex",
            width: `${(items.length * 100) / visibleCount}%`,
          }}
        >
          {items.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={item.year}
                className="history-slider-item"
                style={{
                  width: `${100 / items.length}%`,
                  flexShrink: 0,
                }}
              >
                <div style={{ position: "relative" }}>
                  <motion.div
                    className="slide-circle cursor-pointer"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3.3 }}
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
                      <p className={`year ${isActive ? "active" : ""}`}>
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                  <p className="content">{item.content}</p>
                  {i === items.length - 1 && (
                    <div className="infinite-line"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div> */}
        <motion.div
          className="history-slider-wrapper"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {visibleItems.map((item, i) => {
            const globalIndex = index + i;
            const isActive = globalIndex === activeIndex;

            return (
              <motion.div
                key={item.year}
                className="history-slider-item"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{
                  flex: "0 0 calc(100% / " + visibleCount + ")",
                  textAlign: "center",
                  transform: isActive ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div style={{ position: "relative" }}>
                  <motion.div className="slide-circle cursor-pointer">
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
                      <p className={`year ${isActive ? "active" : ""}`}>
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                  <p className="content">{item.content}</p>
                  {i === visibleItems.length - 1 && (
                    <div className="infinite-line"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default History;
