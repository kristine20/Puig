"use client";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.heroWrapper}`}>
      <div className={`${styles.shadowWrapper}`}>
        <div className="w-fixed flex space-between ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-30"
          >
            <h1 className={`${styles.heroText}`}>
              Твой парфюмерный гид в мире брендов PUIG
            </h1>
          </motion.div>

          <motion.div
            className={`${styles.buttonWrapper}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className={`${styles.heroButton}`}>авторизироваться</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
