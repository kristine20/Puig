// "use client";
// import React, { useState, useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Image from "next/image";

// import arrow from "../../assets/images/arrow.png";
// import "./History.css";

// const items = [
//   {
//     year: 1914,
//     content: "Антонио Пуч Кастелло открывает компанию Antonio Puig S.A.",
//   },
//   {
//     year: 1922,
//     content: "В продажу поступает Milady, первая испанская губная помада.",
//   },
//   {
//     year: 1940,
//     content:
//       "Запуск аромата Agua Lavanda Puig становится символом успеха компании",
//   },
//   {
//     year: 1946,
//     content: "Строительство новой фабрики и здания офиса в Барселоне.",
//   },
//   {
//     year: 1948,
//     content:
//       "Запуск аромата L'Air du Temps. Позже Nina Ricci войдет в состав компании.",
//   },
//   {
//     year: 1950,
//     content: "Сыновья основателя присоединяются к семейному бизнесу.",
//   },
//   { year: 2021, content: "Pivoted to remote work" },
//   { year: 2022, content: "Redesigned our product" },
//   { year: 2023, content: "Hit record growth" },
//   { year: 2024, content: "Launched new platform" },
// ];

// const responsive = {
//   superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 6 },
//   desktop: { breakpoint: { max: 1280, min: 1024 }, items: 4 },
//   tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
//   mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
// };

// const CustomLeftArrow = ({ onClick }) => (
//   <button className="history-button" onClick={onClick}>
//     <Image src={arrow} alt="prev" style={{ transform: "rotate(180deg)" }} />
//   </button>
// );

// const CustomRightArrow = ({ onClick }) => (
//   <button className="history-button" onClick={onClick}>
//     <Image src={arrow} alt="next" style={{ marginLeft: "40px" }} />
//   </button>
// );

// function History() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [visibleItems, setVisibleItems] = useState(4); // Default fallback

//   useEffect(() => {
//     const updateVisibleItems = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) setVisibleItems(6);
//       else if (width >= 1024) setVisibleItems(4);
//       else if (width >= 768) setVisibleItems(2);
//       else setVisibleItems(1);
//     };

//     updateVisibleItems();
//     window.addEventListener("resize", updateVisibleItems);
//     return () => window.removeEventListener("resize", updateVisibleItems);
//   }, []);

//   return (
//     <section className="w-fixed pt-2 mb-80 history">
//       <h2>История PUIG ―</h2>
//       <Carousel
//         responsive={responsive}
//         arrows
//         autoPlay
//         autoPlaySpeed={30000}
//         infinite
//         customLeftArrow={<CustomLeftArrow />}
//         customRightArrow={<CustomRightArrow />}
//         transitionDuration={500}
//         pauseOnHover={false}
//         containerClass="history-slider-wrapper marquee-wrapper"
//         afterChange={(index) => setActiveIndex(index + 1)}
//       >
//         {items.map((item, index) => {
//           const isActive = index === activeIndex;
//           console.log(activeIndex, "activeIndex");
//           return (
//             <div key={item.year} className={`history-slider-item marquee`}>
//               <div className="circle-wrapper">
//                 <svg
//                   className={`circle-svg `}
//                   width="40"
//                   height="40"
//                   viewBox="0 0 40 40"
//                 >
//                   <circle
//                     className="circle-path"
//                     cx="20"
//                     cy="20"
//                     r="18"
//                     fill="none"
//                     stroke={isActive ? "#000" : "#000"}
//                     strokeWidth={isActive ? 1 : 0.5}
//                   />
//                 </svg>
//                 <p className={`year ${isActive ? "active" : ""}`}>
//                   {item.year}
//                 </p>
//               </div>
//               <p className="content">{item.content}</p>
//               <div className="infinite-line"></div>
//             </div>
//           );
//         })}
//       </Carousel>
//     </section>
//   );
// }

// export default History;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "../../assets/images/arrow.png";
import "./HistorySlider.css";

function HistorySlider({ items, title }) {
  const [activeIndex, setActiveIndex] = useState(1);
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
        // scrollerContent.forEach((item) => {
        //   const duplicatedItem = item.cloneNode(true);
        //   duplicatedItem.setAttribute("aria-hidden", true);
        //   scrollerInner.appendChild(duplicatedItem);
        // });
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
    <section className="w-fixed pt-2 mb-80 history">
      {title && <h2>{title}</h2>}
      <button onClick={handlePrevious} className="history-button">
        <Image src={arrow} alt="prev" style={{ transform: "rotate(180deg)" }} />
      </button>

      <button onClick={handleNext} className="history-button">
        <Image src={arrow} alt="next" />
      </button>

      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          {[...items, ...items].map((item, index) => {
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
          })}
        </div>
      </div>
    </section>
  );
}

export default HistorySlider;
