"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DetailsPopup = ({ image, onClose }) => {
  if (!image) return null;

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
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
             <button onClick={onClose} style={{ marginTop: "1rem" }}>
            Закрыть
          </button>
          <Image
            src={image.url}
            alt={image.title}
            width={400}
            height={400}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h3 style={{ marginTop: "1rem" }}>{image.title}</h3>
          {image.description && <p>{image.description}</p>}
       
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailsPopup;
