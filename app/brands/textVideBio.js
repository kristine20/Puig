"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arrow from "../assets/images/arrow.png";
import "./brands.css";

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/xShF57dLhSk" },
  { id: 2, url: "https://www.youtube.com/embed/YCyZbdqugkw" },
  { id: 3, url: "https://www.youtube.com/embed/sddDuLqRIhI" },
  { id: 4, url: "https://www.youtube.com/embed/7A8dMMyxU3M" },
  { id: 5, url: "https://www.youtube.com/embed/RpQuGsNSW7E" },
  { id: 6, url: "https://www.youtube.com/embed/ZUtIoXn6xf8" },
  { id: 7, url: "https://www.youtube.com/embed/Al0Wg4WMca4" },
  { id: 8, url: "https://www.youtube.com/embed/BTNDCicTvBc" },
];
const TextVideoBio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  return (
    <div className="bio-text-video-wrapper">
      <motion.div
        className="bio-text-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      >
        <div className="brand-bio-content-item">
          <h2 className="bio-subtitle">Начало карьеры</h2>
          <p className="bio-text pt-20">
            Начать дизайнерскую карьеру Каролину Эррера вдохновили отзывы
            окружающих, восторгающихся ее образами. Она несколько раз попадала
            на вершину списков самых стильных женщин мира, а самым узнаваемым
            стал ее образ в безупречно белой рубашке, черных брюках и красных
            лакированных туфлях.
          </p>
        </div>
        <div className="brand-bio-content-item">
          <h2 className="bio-subtitle">Переезд</h2>
          <p className="bio-text pt-20">
            В 1980 году семья Эррера переехала в Нью-Йорк, где Каролина открыла
            собственную компанию Carolina Herrera Limited. Дебютной стала линия
            Carolina Herrera New York, первая коллекция которой состояла из 20
            платьев и была презентована на сцене клуба Метрополитен.
          </p>
        </div>
      </motion.div>
      <div className="brand-bio-videos-wrapper">
        <div className="slider-buttons">
          <button onClick={prevSlide} className="slider-buttons">
            <Image
              src={arrow}
              alt="prev"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>

          <button onClick={nextSlide} className="slider-buttons">
            <Image src={arrow} alt="next" />
          </button>
        </div>
        <div className="video-slider">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={videos[currentIndex].id}
              src={videos[currentIndex].url}
              className="slider-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`video-${videos[currentIndex].id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default TextVideoBio;
