"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="accordion-item">
    <button className="accordion-header" onClick={onToggle}>
      <span>{item.title}</span>
      {isOpen && <span className="universe-subtitle">{item.subtitle}</span>}
      <span
        className="toggle-button"
        style={isOpen ? { transform: "rotate(45deg)" } : undefined}
      >
        +
      </span>
    </button>

    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="accordion-body"
    >
      {isOpen && (
        <div className="accordion-content">
          <p className="accordion-content-item"> {item.content}</p>
          <button className="read-history">Читать историю</button>
          <div className="universe-image-wrapper">
            {Array.isArray(item.images) &&
              item.images.map((it, idx) => (
                <div key={idx} className="universe-item">
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

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper w-fixed">
      <h2 className="universe-title">ПАРФЮМЕРНЫЕ ВСЕЛЕННЫЕ</h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          //   title={item.title}
          //   content={item.content}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
