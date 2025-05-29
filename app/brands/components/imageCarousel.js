import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.css";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

// Custom arrows
const CustomLeftArrow = ({ onClick }) => (
  <button
    className={`${styles["custom-arrow"]} ${styles["custom-left-arrow"]}`}
    onClick={onClick}
  >
    ‹
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className={`${styles["custom-arrow"]} ${styles["custom-right-arrow"]}`}
    onClick={onClick}
  >
    ›
  </button>
);

const ImageCarousel = ({ galleryItems }) => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles["carousel-container"]}>
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass=""
          itemClass={styles["carousel-item"]}
          dotListClass={styles["custom-dot-list-style"]}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {galleryItems.imagegallery.map((item, index) => (
            <div key={index}>
              <Image
                src={item.src}
                alt={item.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        {" "}
        <Image
          src={galleryItems.rightImage[0].src}
          alt="PUIG"
          style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
        />
        <p className={styles.text1}>{galleryItems.rightImage[0].title}</p>
        <div className={styles.rightContent}>
          {galleryItems.rightContent.map((item) => {
            return (
              <div>
                <span className={styles.subtext}>{item.subtext}</span>
                <p className={styles.text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
