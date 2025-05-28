"use client";

import { useEffect } from "react";
import styles from "./General.module.css";

function isYouTubeUrl(url) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
}

export default function PopupVideo({ videoUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!videoUrl) return null;

  return (
    <div className={styles.videoOverlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>

        {isYouTubeUrl(videoUrl) ? (
          <iframe
            src={videoUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={styles.video}
          />
        ) : (
          <video
            controls
            autoPlay
            className={styles.video}
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
