"use client";
import { useState } from "react";
import Image from "next/image";

import playIcon from "../../assets/images/videoTraining/playicon.svg";
import "../brands.css";

const VideoGallery = ({ videos }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openVideo = (index) => setSelectedIndex(index);
  const closeVideo = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  if (!Array.isArray(videos) || videos.length === 0) return null;

  return (
    <div className="video-gallery-wrapper w-fixed">
      <div className="video-grid">
        {videos.map((video, idx) => (
          <div
            key={video.id || idx}
            className="video-thumbnail"
            onClick={() => openVideo(idx)}
          >
            {/* <iframe
              src={video.url}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`video-${video.id || idx}`}
              className="video-frame"
            /> */}
            <Image
              src={video.cover}
              alt={video.cover || `image-${idx}`}
              className="video-frame"
            />
            <Image
              src={playIcon}
              alt="play"
              className="playIcon"
              // onClick={() => setPopupVideo(video.url)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="video-popup-overlay" onClick={closeVideo}>
          <div
            className="video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-popup-close" onClick={closeVideo}>
              ✕
            </button>
            <button className="video-popup-nav prev" onClick={showPrev}>
              ‹
            </button>
            <button className="video-popup-nav next" onClick={showNext}>
              ›
            </button>

            <div className="video-popup-slider">
              {videos.map((video, idx) => (
                <div
                  className="video-popup-slide"
                  key={idx}
                  style={{
                    transform: `translateX(-${selectedIndex * 100}%)`,
                  }}
                >
                  <iframe
                    src={video.url}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="video-popup-video"
                    title={`popup-${video.id || idx}`}
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

export default VideoGallery;
