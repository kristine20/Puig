"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../../assets/images/home/slide1.jpg";
import img2 from "../../../assets/images/home/slide2.jpg";
import img3 from "../../../assets/images/home/slide3.jpg";
import img4 from "../../../assets/images/home/slide4.jpg";
import playIcon from "../../../assets/images/videoTraining/playicon.svg";

import arrowIcon from "../../../assets/images/arrow.png";
import { useWindowWidth } from "../../../hooks";

import styles from "./ProductSlider.module.css";

const DEFAULT_ITEMS = [
  {
    id: 1,
    text: "нажать, чтобы посмотреть",
    media: img1,
    videoUrl: "https://www.youtube.com/embed/QROtDjUy4d4",
  },
  {
    id: 2,
    text: "нажать, чтобы посмотреть",
    media: img2,
    videoUrl: "https://www.youtube.com/embed/l8kT72DirtM",
  },
  {
    id: 3,
    text: "нажать, чтобы посмотреть",
    media: img3,
    videoUrl: "https://www.youtube.com/embed/heHUrkaEKeE",
  },
  {
    id: 4,
    text: "нажать, чтобы посмотреть",
    media: img4,
    videoUrl: "https://www.youtube.com/embed/DvaEt-8cDYU",
  },
];

export default function ProductSlider({ items = DEFAULT_ITEMS }) {
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationKeys, setAnimationKeys] = useState({});
  const [popupVideo, setPopupVideo] = useState(null);

  const closePopup = () => setPopupVideo(null);
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
                    <Image
                      src={item.media}
                      alt="media"
                      className={styles.sliedImg}
                    />
                    <Image
                      src={playIcon}
                      alt="play"
                      className={styles.playIcon}
                      onClick={() => setPopupVideo(item.videoUrl)}
                    />
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

      {popupVideo && (
        <motion.div
          className={styles.videoOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <button
            onClick={closePopup}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              fontSize: "24px",
              background: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <motion.div
            className={styles.videoWrapper}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
          >
            <iframe
              src={popupVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={styles.videoIframe}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
