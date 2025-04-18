"use client";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-text">Твой парфюмерный гид в мире брендов PUIG</h1>
      </motion.div>

      <motion.div
        className="button-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <button className="hero-button">авторизироваться</button>
      </motion.div>
    </section>
  );
}
