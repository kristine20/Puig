"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { singleDetails } from "../data/singleData";
import ImageCarousel from "./imageCarousel";

const DetailsPopup = ({ image, onClose }) => {
  if (!image) return null;

  // Найти детали по image.title
  const foundDetail = Object.values(singleDetails)
    .flat()
    .find((item) => item.title === image.title);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "1000px",
            overflow: "auto",
            height: "100%",
          }}
        >
          <button onClick={onClose} className="closeButton">
            X
          </button>
          <div style={{ borderBottom: "4px double black" }}>
            {foundDetail?.brandTitle && (
              <h4 style={{ marginTop: "0.5rem", fontWeight: "normal" }}>
                {foundDetail.brandTitle}
              </h4>
            )}
            <h3 style={{ marginTop: "1rem" }}>{image.title}</h3>
          </div>
          <ImageCarousel galleryItems={foundDetail} />

          {foundDetail?.description?.length > 0 && (
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ borderTop: "5px double #000", paddingTop: "30px" }}>
                {foundDetail.description.map((desc, index) => (
                  <div
                    key={index}
                    style={{
                      width: "80%",
                      margin: "0 auto",

                      paddingTop: "10px",
                    }}
                  >
                    {desc.title && <h2>{desc.title}</h2>}
                    <p style={{ marginBottom: "0.5rem" }}>{desc.text}</p>
                    {desc.video && (
                      <div
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%",
                          height: 0,
                          overflow: "hidden",
                        }}
                      >
                        <iframe
                          src={desc.video}
                          title={`Video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailsPopup;
