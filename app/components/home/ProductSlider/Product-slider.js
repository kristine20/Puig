"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import defaultMedia from "../../../assets/images/slider-image.png";
import arrowIcon from "../../../assets/images/arrow.png";
import { useWindowWidth } from "../../../hooks";

import styles from "./ProductSlider.module.css";

const DEFAULT_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  text: "нажать, чтобы посмотреть",
  media: defaultMedia,
}));

export default function ProductSlider({ items = DEFAULT_ITEMS }) {
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationKeys, setAnimationKeys] = useState({});

  const visibleCount = width <= 669 ? 1 : 4;

  useEffect(() => {
    setActiveIndex(width <= 768 ? 0 : 1);
  }, [width]);

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
    <div className={styles.sliderContainer}>
      <motion.div className={styles.sliderWrapper} layout>
        {visibleItems.map((item, i) => (
          <motion.div key={item.id} className={styles.sliderItem} layout>
            <div>
              <AnimatePresence mode="wait">
                {activeIndex !== i ? (
                  <>
                    <motion.div
                      className={`${styles.slideCircle} cursor-pointer`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => toggleMedia(i)}
                    >
                      <div
                        className={styles.circleWrapper}
                        onMouseEnter={() => restartAnimation(i)}
                      >
                        <svg
                          className={styles.circleSvg}
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          key={animationKeys[i] || 0}
                        >
                          <circle
                            className={styles.circlePath}
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            stroke="#000"
                            strokeWidth="0.5"
                          />
                        </svg>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          className={styles.arrowIcon}
                        />
                      </div>
                    </motion.div>
                    <motion.p
                      className={`${styles.slideText} cursor-pointer`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => toggleMedia(i)}
                    >
                      {item.text}
                    </motion.p>
                  </>
                ) : (
                  <motion.div
                    key="media"
                    className={styles.slideMedia}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Image src={item.media} alt="media" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {width <= 669 && (
        <div className={styles.sliderButtonWrapper}>
          <span className={styles.seeMore}>посмотреть ещё</span>
          <button
            onClick={handleNext}
            disabled={index >= items.length - visibleCount}
            className={styles.historyButton}
          >
            <Image src={arrowIcon} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
}
