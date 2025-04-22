"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import company from "../../assets/images/company.png";
import { useWindowWidth } from "@/app/hooks";
import "./Company.css";

export default function Company() {
  const width = useWindowWidth();
  return (
    <section className="w-fixed company-wrapper pt-1 ">
      <motion.div
        className="company-text-wrapper"
        // initial={width && width <= 490 ? { opacity: 0 } : { opacity: 0, x: 8 }}
        // whileInView={
        //   width && width <= 490 ? { opacity: 1 } : { opacity: 1, x: 200 }
        // }
        // viewport={{ once: false, amount: 0.5 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <h2>Компания PUIG ― </h2>
          <p className="company-text">
            семейная компания, которой в настоящее время управляет третье
            поколение семьи Puig. Штаб-квартира Puig располагается в Барселоне.
            Залог успеха компании ― в умелом развитии модных и парфюмерных
            брендов, грамотном использовании уникальных концепций и высоком
            качестве продукции.
          </p>
          <p className="company-text">
            PUIG полностью владеет такими домами моды как: Paco Rabanne,
            Carolina Herrera, Nina Ricci, Jean Paul Gaultier и Dries Van Noten.
            А также работает по лицензии с марками: Christian Louboutin, Comme
            Des Garsons, Antonio Banderas, Shakira и United Colors of Benetton.
            Продукция компании представлена более чем в 150 странах мира.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="image-wrapper"
        // initial={{ opacity: 0, x: 50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: false, amount: 0.5 }}
        // transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image src={company} alt="Company" />
      </motion.div>
    </section>
  );
}
