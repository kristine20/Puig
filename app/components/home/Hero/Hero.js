"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import PopupVideo from "../../General/PopupVideo";
import { useState } from "react";

export default function Hero() {
  const [popupVideo, setPopupVideo] = useState(null);
  const closePopup = () => setPopupVideo(null);

  return (
    <section className={styles.heroWrapper}>
      <div
        className={styles.videoBackground}
        onClick={() => setPopupVideo("./PUIG2.mp4")}
      >
        <video autoPlay muted loop playsInline>
          <source src="./PUIG2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.shadowWrapper}>
        <div className="w-fixed flex space-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-30"
          >
            <h1 className={styles.heroText}>
              Твой парфюмерный гид в мире брендов PUIG
            </h1>
          </motion.div>
        </div>
      </div>
      {popupVideo && <PopupVideo videoUrl={popupVideo} onClose={closePopup} />}
    </section>
  );
}
