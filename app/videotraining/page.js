// components/VideoTraining.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./videotraining.css";

const VideoTraining = ({ videos }) => {
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
        {videos?.map((image, index) => (
          <div key={index} className="video-training-image">
            <Image src={image.src} alt={image.title} className="video-image" />
            <Image
              src={image.playIcon}
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

      {fullscreenImage && !activeVideo && (
        <div className="fullscreen-image active">
          <Image
            src={fullscreenImage.src}
            alt={fullscreenImage.title}
            fill
            className="fullscreen-image-content"
          />
          <Image
            src={fullscreenImage.playIcon}
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
