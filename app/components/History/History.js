"use client";
import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
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

function History() {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % items.length; // Cycle through items
      setActiveIndex(nextIndex);
    }, 5000); // 3 seconds delay before changing index

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or re-render
  }, [activeIndex]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        setActiveIndex(activeIndex + 1);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="w-fixed pt-2 mb-80 history">
      <h2>История PUIG ―</h2>
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={item.year} className={`history-slider-item marquee`}>
                <div className="circle-wrapper">
                  <svg
                    className={`circle-svg `}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <circle
                      className="circle-path"
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke={"#000"}
                      strokeWidth={isActive ? 1 : 0.5}
                    />
                  </svg>
                  <p className={`year ${isActive ? "active" : ""}`}>
                    {item.year}
                  </p>
                </div>
                <p className="content">{item.content}</p>
                {/* <div className="infinite-line"></div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default History;
