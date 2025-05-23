"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

import company from "../../assets/images/company.jpg";
import { useWindowWidth } from "../../hooks";
import styles from "./Company.module.css";

export default function Company() {
  const width = useWindowWidth();

  // Responsive width logic optimized with useMemo
  const imageWidth = useMemo(() => {
    if (width >= 2540) return "61%";
    if (width > 2380) return "62%";
    if (width > 2115) return "63%";
    if (width >= 1905 && width <= 1915) return "65%";
    return "65%";
  }, [width]);

  return (
    <section className={`${styles.companyWrapper} w-fixed pt-1`}>
      <motion.div
        className={`${styles.companyTextWrapper} w-30`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      >
        <h2>Компания PUIG ― </h2>
        <div className={`${styles.countedColum}`}>
          <p className={`${styles.companyText}`}>
            семейная компания, которой в настоящее время управляет третье
            поколение семьи Puig. Штаб-квартира Puig располагается в Барселоне.
            Залог успеха компании ― в умелом развитии модных и парфюмерных
            брендов, грамотном использовании уникальных концепций и высоком
            качестве продукции.
          </p>
          <p className={`${styles.companyText}`}>
            PUIG полностью владеет такими домами моды как: Paco Rabanne,
            Carolina Herrera, Nina Ricci, Jean Paul Gaultier и Dries Van Noten.
            А также работает по лицензии с марками: Christian Louboutin, Comme
            Des Garçons, Antonio Banderas, Shakira и United Colors of Benetton.
            Продукция компании представлена более чем в 150 странах мира.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.imageWrapper}`}
        style={{ width: imageWidth }}
      >
        <Image src={company} alt="Company" priority />
      </motion.div>
    </section>
  );
}
