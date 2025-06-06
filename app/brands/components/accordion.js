"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DetailsPopup from "./detailsPopup";
import accordionBg from "../../assets/images/brands/accordionbg.jpg";

const AccordionItem = ({ item, isOpen, onToggle, onImageClick }) => {
  return (
    <div className="accordion-item">
      <button
        className={isOpen ? "accordion-header-open" : "accordion-header"}
        onClick={onToggle}
      >
        <span className="universe-subtitle">{item.subtitle}</span>

        <div className="accordion-title-wrapper">
          <Image src={accordionBg} alt="background" className="accordion-bg" />
          <span className="universe-item-title">{item.title}</span>
        </div>

        <span className={`toggle-button ${isOpen ? "rotated" : ""}`}>+</span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="accordion-body"
      >
        {isOpen && (
          <div className="accordion-content">
            <p className="accordion-content-item">{item.content}</p>
            <button className="read-history">Читать историю</button>
            <div className="universe-image-wrapper">
              {Array.isArray(item.images) &&
                item.images.map((it, idx) => (
                  <div
                    key={idx}
                    className="universe-item"
                    onClick={() => onImageClick(it)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={it.url}
                      alt={it.title}
                      className="universe-image-item"
                      width={300}
                      height={300}
                    />
                    <span>{it.title}</span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper w-fixed">
      <h2 className="universe-title">ПАРФЮМЕРНЫЕ ВСЕЛЕННЫЕ</h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
          onImageClick={setSelectedImage}
        />
      ))}

      {/* Modal with image details */}
      <DetailsPopup
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Accordion;
