"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "../../assets/images/arrow.png";
import "./HistorySlider.css";
import { useWindowWidth } from "@/app/hooks";

function HistorySlider({
  items,
  title,
  buttonPosition = "top",
  direction = "horizontal",
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const width = useWindowWidth();
  const isMobile = width <= 768;
  const isVertical = direction === "vertical";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      setActiveIndex(nextIndex);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [activeIndex]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        // Duplicate logic for infinite scroll can be added here
      });
    }
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section
      className={`w-fixed pt-1 mb-80 history ${
        isVertical ? "vertical" : "horizontal"
      }`}
    >
      {title && <h2>{title}</h2>}
      {buttonPosition === "top" && (
        <div className="history-button-group">
          <button onClick={handlePrevious} className="history-button">
            <Image
              src={arrow}
              alt="prev"
              style={{
                transform: isVertical ? "rotate(90deg)" : "rotate(180deg)",
              }}
            />
          </button>
          <button onClick={handleNext} className="history-button">
            <Image
              src={arrow}
              alt="next"
              style={{ transform: isVertical ? "rotate(-90deg)" : "none" }}
            />
          </button>
        </div>
      )}

      <div className={`scroller ${isVertical ? "vertical" : "horizontal"}`}>
        <div className="scroller__inner">
          {(isMobile && !isVertical ? items : [...items, ...items]).map(
            (item, index) => {
              const isActive = index % items.length === activeIndex;
              return (
                <div
                  key={`${item.year}-${index}`}
                  className="history-slider-item marquee"
                >
                  <div className="circle-wrapper">
                    <svg
                      className="circle-svg"
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
                        stroke="#000"
                        strokeWidth={isActive ? 1 : 0.5}
                      />
                    </svg>
                    <p className={`year ${isActive ? "active" : ""}`}>
                      {item.year}
                    </p>
                  </div>
                  <p className="content">{item.content}</p>
                </div>
              );
            }
          )}
        </div>
      </div>

      {buttonPosition === "bottom" && (
        <div className="history-button-group">
          <button onClick={handlePrevious} className="history-button">
            <Image
              src={arrow}
              alt="prev"
              style={{
                transform: isVertical ? "rotate(90deg)" : "rotate(180deg)",
              }}
            />
          </button>
          <button onClick={handleNext} className="history-button">
            <Image
              src={arrow}
              alt="next"
              style={{ transform: isVertical ? "rotate(-90deg)" : "none" }}
            />
          </button>
        </div>
      )}
    </section>
  );
}

export default HistorySlider;
