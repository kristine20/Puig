"use client";

import { useEffect } from "react";
import styles from "./General.module.css";
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
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.video}
        />
      </div>
    </div>
  );
}
