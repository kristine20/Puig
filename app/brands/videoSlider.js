// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import arrow from "../assets/images/arrow.png";
// import { useWindowWidth } from "../hooks";
// import "./brands.css";

// const videos = [
//   { id: 1, url: "https://www.youtube.com/embed/xShF57dLhSk" },
//   { id: 2, url: "https://www.youtube.com/embed/YCyZbdqugkw" },
// ];

// const VideoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const width = useWindowWidth();
//   const isMobile = width <= 780;

//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
//   const nextSlide = () =>
//     setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

//   return isMobile ? (
//     <div className="video-list">
//       {videos.map((video) => (
//         <iframe
//           key={video.id}
//           src={video.url}
//           className="video-item"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//           title={`video-${video.id}`}
//         />
//       ))}
//     </div>
//   ) : (
//     <>
//       <div className="slider-buttons">
//         <button onClick={prevSlide} className="slider-buttons">
//           <Image
//             src={arrow}
//             alt="prev"
//             style={{ transform: "rotate(180deg)" }}
//           />
//         </button>
//         <button onClick={nextSlide} className="slider-buttons">
//           <Image src={arrow} alt="next" />
//         </button>
//       </div>
//       <div className="video-slider">
//         <AnimatePresence mode="wait">
//           <motion.iframe
//             key={videos[currentIndex].id}
//             src={videos[currentIndex].url}
//             className="slider-video"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title={`video-${videos[currentIndex].id}`}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default VideoSlider;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import arrow from "../assets/images/arrow.png";
import { useWindowWidth } from "../hooks";
import "./brands.css";

const VideoSlider = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = useWindowWidth();
  const isMobile = width <= 960;
  if (!Array.isArray(videos) || videos.length === 0) {
    return null;
  }
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos?.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === videos?.length - 1 ? 0 : prev + 1));

  return isMobile ? (
    <div className="video-list">
      {videos?.map((video) => (
        <iframe
          key={video.id}
          src={video.url}
          className="video-item"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`video-${video.id}`}
        />
      ))}
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
    </>
  );
};

export default VideoSlider;
