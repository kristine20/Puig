"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import signature from "../../assets/images/signature.png";
import bio from "../../assets/images/mark.png";
import "./Bio.css";

export default function Bio() {
  return (
    <div className="row">
      <section className="w-fixed bio-wrapper pt-1">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-30"
        >
          <Image src={bio} alt="Bio" className="avatar h-auto" />
        </motion.div>
        <motion.div
          className="bio-text-wrapper items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <p className="bio-text">
            Компания Puig известна своим умением развивать модные бренды, и мы
            делаем все возможное, чтобы так же успешно действовать в сфере
            парфюмерии. Мы верим, что основа нашего успеха ― сочетание
            талантливого управления бизнесом и страсти к моде и ароматам. Мы
            объединили творчество и увлеченность в уникальную бизнес-модель.
          </p>

          <div className="bio-basic">
            <div>
              <p className="bio-name">Марк Пуч</p>
              <p className="bio-position">Президент компании</p>
            </div>
            <Image src={signature} alt="Signature" className="h-auto" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
