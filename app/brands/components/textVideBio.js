

"use client";
import { motion } from "framer-motion";
import "../brands.css";
import { useWindowWidth } from "../../hooks";

import VideoSlider from "./videoSlider";

const TextVideoBio = ({ sections, showVideoOnDesktop = true, videos }) => {
  const width = useWindowWidth();
  const isDesktop = width >= 650;

  return (
    <>
      <div className="bio-text-video-wrapper">
        <motion.div
          className="brand-bio-text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          {sections.map((section, index) => (
            <div className="brand-bio-content-item" key={index}>
              <h2 className="bio-subtitle">{section.title}</h2>
              <p className="bio-text pt-20">{section.content}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {isDesktop && showVideoOnDesktop && (
        <div className="brand-bio-videos-wrapper w-70">
          <VideoSlider videos={videos} />
        </div>
      )}
    </>
  );
};

export default TextVideoBio;
