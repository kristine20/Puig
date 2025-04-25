"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import media from "../../assets/images/slider-image.png";
import arrow from "../../assets/images/arrow.png";
import { useWindowWidth } from "../../hooks";
import "./Slider.css";

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

function Slider() {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const width = useWindowWidth();

  const visibleCount = width && width <= 490 ? 1 : 4;
  const [animationKeys, setAnimationKeys] = useState({});

  const restartAnimation = (i) => {
    setAnimationKeys((prev) => ({
      ...prev,
      [i]: (prev[i] || 0) + 1,
    }));
  };
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
    setActiveIndex(null);
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, items.length - visibleCount));
    setActiveIndex(null);
  };

  const toggleMedia = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const visibleItems = items.slice(index, index + visibleCount);

  return (
    <div className="slider-container pt-2">
      <motion.div className="slider-wrapper" layout>
        {visibleItems.map((item, i) => (
          <motion.div key={i} className="slider-item" layout>
            <div key={i}>
              <AnimatePresence mode="wait">
                {activeIndex !== i && (
                  <>
                    <motion.div
                      className="slide-circle cursor-pointer "
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => toggleMedia(i)}
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
                        <Image src={arrow} alt="arrow" className="arrow-icon" />
                      </div>
                    </motion.div>

                    <motion.p
                      key="text"
                      className="slide-text cursor-pointer"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => toggleMedia(i)}
                    >
                      нажать, чтобы посмотреть
                    </motion.p>
                  </>
                )}

                {activeIndex === i && (
                  <motion.div
                    key="media"
                    className="slide-media"
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -80,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <Image src={media} alt="media" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {width && width <= 495 ? (
        <div className="slider-button-wrapper">
          <span className="see-more">посмотреть ещё</span>{" "}
          <button
            onClick={handleNext}
            disabled={index >= items.length - visibleCount}
            className="history-button"
          >
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
