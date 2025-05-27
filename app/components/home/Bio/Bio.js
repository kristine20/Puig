"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

import bio from "../../../assets/images/mark.png";
import styles from "./Bio.module.css";

const Bio = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const sign = document.getElementById("dex-sign");
      if (sign) {
        sign.classList.add("play");
      }
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="row">
      <section className={`${styles.bioWrapper} w-fixed  pt-1`}>
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-30"
        >
          <Image src={bio} alt="Bio" className={`${styles.avatar}`} />
        </motion.div>
        <motion.div
          className={`${styles.bioTextWrapper} items-center`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <p className={`bio-text`}>
            Компания Puig известна своим умением развивать модные бренды, и мы
            делаем все возможное, чтобы так же успешно действовать в сфере
            парфюмерии. Мы верим, что основа нашего успеха ― сочетание
            талантливого управления бизнесом и страсти к моде и ароматам. Мы
            объединили творчество и увлеченность в уникальную бизнес-модель.
          </p>

          <div className={`${styles.bioBasic}`}>
            <div>
              <p className={`${styles.bioName}`}>Марк Пуч</p>
              <p className={`${styles.bioPosition}`}>Президент компании</p>
            </div>

            <p id="dex-sign" className="play-target" />
            {/* <video autoPlay muted loop playsInline>
              <source src="/sign_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default Bio;
