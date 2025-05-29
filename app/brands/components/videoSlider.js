"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import arrow from "../../assets/images/arrow.png";
import "../brands.css";
import { useWindowWidth } from "../../hooks";

// Utility: Check if URL is a YouTube link
function isYouTubeUrl(url) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
}

const VideoSlider = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = useWindowWidth();
  const isMobile = width <= 960;

  if (!Array.isArray(videos) || videos.length === 0) {
    return null;
  }

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return isMobile ? (
    <div className="video-list">
      {videos.map((video) =>
        isYouTubeUrl(video.url) ? (
          <iframe
            key={video.id}
            src={video.url}
            className="video-item"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`video-${video.id}`}
          />
        ) : (
          <video
            key={video.id}
            src={video.url}
            controls
            // autoPlay
            className="video-item"
            title={`video-${video.id}`}
          />
        )
      )}
    </div>
  ) : (
    <>
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
          <motion.div
            key={videos[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {isYouTubeUrl(videos[currentIndex].url) ? (
              <iframe
                src={videos[currentIndex].url}
                className="slider-video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`video-${videos[currentIndex].id}`}
              />
            ) : (
              <video
                src={videos[currentIndex].url}
                controls
                className="slider-video"
                title={`video-${videos[currentIndex].id}`}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default VideoSlider;
