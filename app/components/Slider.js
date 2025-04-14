// "use client";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const Slider = () => {
//   return (
//     <section className="w-fixed ">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={4}
//         navigation
//         // pagination={{ clickable: true }}
//         //scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//         className="slider-wrapper"
//       >
//         <SwiperSlide className="slide-item">
//           <div></div>
//         </SwiperSlide>
//         <SwiperSlide className="slide-item">Slide 2</SwiperSlide>
//         <SwiperSlide className="slide-item">Slide 3</SwiperSlide>
//         <SwiperSlide className="slide-item">Slide 4</SwiperSlide>
//         <SwiperSlide className="slide-item">Slide 5</SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default Slider;

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Image from "next/image";
// import arrow from "../assets/images/arrow.png";
// import media from "../assets/images/slider-image.png";

// const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

// function Slider() {
//   const [index, setIndex] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const visibleCount = 4;

//   const handlePrev = () => {
//     setIndex((prev) => Math.max(prev - 1, 0));
//     setActiveIndex(null);
//   };

//   const handleNext = () => {
//     setIndex((prev) => Math.min(prev + 1, items.length - visibleCount));
//     setActiveIndex(null);
//   };

//   const toggleMedia = (i) => {
//     setActiveIndex(activeIndex === i ? null : i);
//   };

//   const visibleItems = items.slice(index, index + visibleCount);

//   return (
//     <div className="slider-container">
//       <button onClick={handlePrev} disabled={index === 0}>
//         ◀
//       </button>
//       <motion.div className="slider-wrapper" layout>
//         {visibleItems.map((item, i) => (
//           <motion.div key={i} className="slider-item" layout>
//             <AnimatePresence mode="wait">
//               {activeIndex !== i && (
//                 <>
//                   <motion.div
//                     className="slide-circle cursor-pointer"
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.1 }}
//                     onClick={() => toggleMedia(i)}
//                   >
//                     <Image src={arrow} alt="arrow" />
//                   </motion.div>
//                   <motion.p
//                     key="text"
//                     className="slide-text cursor-pointer"
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.1 }}
//                     onClick={() => toggleMedia(i)}
//                   >
//                     нажать, чтобы посмотреть
//                   </motion.p>
//                 </>
//               )}
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               {activeIndex === i && (
//                 // <motion.div
//                 //   key="media"
//                 //   className="slide-media"
//                 //   initial={{
//                 //     opacity: 0,
//                 //     y: 50,
//                 //     rotateX: -90,
//                 //     transformOrigin: "bottom center",
//                 //   }}
//                 //   animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                 //   exit={{ opacity: 0, y: 50, rotateX: -90 }}
//                 //   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 // >
//                 <motion.div
//                   className="slide-media"
//                   initial={{
//                     opacity: 0,
//                     y: 80,
//                     rotateX: -90,
//                     transformOrigin: "bottom center",
//                   }}
//                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                   exit={{ opacity: 0, y: 80, rotateX: -90 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                   <Image src={media} alt="media" style={{ width: "305px" }} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </motion.div>
//       <button
//         onClick={handleNext}
//         disabled={index >= items.length - visibleCount}
//       >
//         ▶
//       </button>
//     </div>
//   );
// }

// export default Slider;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import arrow from "../assets/images/arrow.png";
import media from "../assets/images/slider-image.png";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

function Slider() {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const visibleCount = 4;

  const [animationKey, setAnimationKey] = useState(0);

  const restartAnimation = () => {
    setAnimationKey((prev) => prev + 1);
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
    <div className="slider-container">
      {/* <button onClick={handlePrev} disabled={index === 0}>
        ◀
      </button> */}
      <motion.div className="slider-wrapper" layout>
        {visibleItems.map((item, i) => (
          <motion.div key={i} className="slider-item" layout>
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
                      onMouseEnter={restartAnimation}
                    >
                      <svg
                        className="circle-svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        key={animationKey} // force re-render to restart animation
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
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {activeIndex === i && (
                <motion.div
                  key="media"
                  className="slide-media"
                  initial={{
                    opacity: 0,
                    y: 80, // Start below (bottom)
                  }}
                  animate={{
                    opacity: 1,
                    y: 0, // Move upwards to the original position
                  }}
                  exit={{
                    opacity: 0,
                    y: -80, // Go back down
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
          </motion.div>
        ))}
      </motion.div>
      {/* <button
        onClick={handleNext}
        disabled={index >= items.length - visibleCount}
      >
        ▶
      </button> */}
    </div>
  );
}

export default Slider;
