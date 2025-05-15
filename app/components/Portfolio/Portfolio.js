"use client";

import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

const circles = [
  {
    title: "NICHE",
    items: [
      "Herrera Confidential",
      "Penhaligon's",
      "L'Artisan Parfumeur",
      "Christian Louboutin",
    ],
  },
  {
    title: "PRESTIGE",
    items: [
      "Paco Rabanne",
      "Carolina Herrera",
      "Nina Ricci",
      "Jean Paul Gaultier",
    ],
  },
  {
    title: "LIFESTYLE",
    items: ["Antonio Banderas", "United Colors of Benetton", "Shakira"],
  },
];

const slideDownVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Portfolio = () => {
  return (
    <section className={styles.portfolioFullBg}>
      <section className={`w-fixed pl-15 ${styles.portfolioWrapper}`}>
        <div className="row">
          <h1>Портфолио брендов PUIG в России </h1>
        </div>

        <div className={`pt-1 pl-15 ${styles.portfolioListWrapper}`}>
          {circles.map((block, i) => (
            <motion.div
              key={block.title}
              custom={i}
              variants={slideDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ul className={styles.listCircle}>
                <li>{block.title}</li>
              </ul>
              <ul className={styles.portfolioItems}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
