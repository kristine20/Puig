// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import arrow from "../../assets/images/arrow.png";
// import "../brands.css";
// import { useWindowWidth } from "../../hooks";

// const VISIBLE_COUNT = 3;

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const width = useWindowWidth();
//   const isMobile = width <= 960;

//   if (!Array.isArray(images) || images.length === 0) return null;

//   const maxStartIndex = Math.max(0, images.length - VISIBLE_COUNT);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
//   };

//   const visibleImages = isMobile
//     ? images
//     : images.slice(currentIndex, currentIndex + VISIBLE_COUNT);

//   return (
//     <div className="image-slider-container">
//       {!isMobile && (
//         <div className="slider-buttons">
//           <button onClick={prevSlide} className="slider-button">
//             <Image
//               src={arrow}
//               alt="prev"
//               style={{ transform: "rotate(180deg)" }}
//             />
//           </button>
//           <button onClick={nextSlide} className="slider-button">
//             <Image src={arrow} alt="next" />
//           </button>
//         </div>
//       )}

//       <div className="image-slider">
//         {visibleImages.map((img, idx) => (
//           <div key={img.id || idx} className="slider-image-wrapper">
//             <Image
//               src={img.url}
//               alt={img.alt || `image-${idx}`}
//               className="slider-image"
//               width={300}
//               height={200}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

"use client";
import { useState } from "react";
import Image from "next/image";
import "./section.css";

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const setSelectedImage = (img) => {
    const index = images.findIndex((i) => i.id === img.id);
    setSelectedIndex(index);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="image-gallery-wrapper">
      <div className="image-gallery-scroll">
        {images.map((img, idx) => (
          <div
            key={img.id || idx}
            className="slider-image-wrapper"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.url}
              alt={img.alt || `image-${idx}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedIndex !== null && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Slide controls */}
            <button className="popup-nav prev" onClick={showPrev}>
              ‹
            </button>
            <button className="popup-nav next" onClick={showNext}>
              ›
            </button>

            {/* Slide container */}
            <div className="popup-slider">
              {images.map((img, idx) => (
                <div
                  className="popup-slide"
                  key={idx}
                  style={{
                    transform: `translateX(-${selectedIndex * 100}%)`,
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt || `popup-${idx}`}
                    className="popup-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
