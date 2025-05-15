"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import image1 from "../assets/images/videoTraining/image1-full.png";
import image2 from "../assets/images/videoTraining/image2-full.png";
import image3 from "../assets/images/videoTraining/image3-full.png";
import image4 from "../assets/images/videoTraining/image4-full.png";
import playicon from "../assets/images/videoTraining/playicon.svg";

import "./videotraining.css";

const images = [
  {
    src: image1,
    title: "Very Good Girl Glam",
    videoUrl: "https://www.youtube.com/embed/SqI5bIDF3UA?autoplay=1",
  },
  {
    src: image2,
    title: "Bad boy Cobalt",
    videoUrl: "https://www.youtube.com/embed/4QrEocTz69Y?autoplay=1",
  },
  {
    src: image3,
    title: "Very Good Girl & Bad Boy Le Parfum",
    videoUrl: "https://www.youtube.com/embed/1v4ITdghGGQ?autoplay=1",
  },
  {
    src: image4,
    title: "Gud Girl Supreme",
    videoUrl: "https://www.youtube.com/embed/y4pMsroDb1k?autoplay=1",
  },
];

const VideoTraining = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (fullscreenImage && !activeVideo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [fullscreenImage, activeVideo]);
  return (
    <div>
      <div className="w-fixed">
        <h2 className="vt-title">Carolina Herrera</h2>
      </div>
      <div className="video-training-wrapper">
        {images.map((image, index) => (
          <div key={index} className="video-training-image">
            <Image src={image.src} alt={image.title} className="video-image" />
            <Image
              src={playicon}
              alt="playIcon"
              className="play-icon"
              onClick={() => setFullscreenImage(image)}
            />
            <div className="video-content-wrapper">
              <div className="video-content-content">
                <span className="trainner">Carolina Herrera — </span>
                <p className="video-title">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1: Show full screen image with second play icon */}
      {fullscreenImage && !activeVideo && (
        <div className="fullscreen-image active">
          <Image
            src={fullscreenImage.src}
            alt={fullscreenImage.title}
            fill
            className="fullscreen-image-content"
          />
          <Image
            src={playicon}
            alt="playIcon"
            className="fullscreen-play-icon"
            onClick={() => setActiveVideo(fullscreenImage.videoUrl)}
          />
          <button
            className="close-fullscreen"
            onClick={() => setFullscreenImage(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* Step 2: Show fullscreen video */}
      {activeVideo && (
        <div className="fullscreen-video active">
          <iframe
            src={activeVideo}
            title="Video player"
            frameBorder="0"
            allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            className="close-fullscreen"
            onClick={() => {
              setActiveVideo(null);
              setFullscreenImage(null);
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoTraining;
