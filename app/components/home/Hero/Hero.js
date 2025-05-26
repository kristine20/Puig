// "use client";
// import { motion } from "framer-motion";

// import styles from "./Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={`${styles.heroWrapper}`}>
//       <div className={`${styles.shadowWrapper}`}>
//         <div className="w-fixed flex space-between ">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="w-30"
//           >
//             <h1 className={`${styles.heroText}`}>
//               Твой парфюмерный гид в мире брендов PUIG
//             </h1>
//           </motion.div>

//           <motion.div
//             className={`${styles.buttonWrapper}`}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           >
//             <button className={`${styles.heroButton}`}>авторизироваться</button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      {/* YouTube background iframe */}
      <div className={styles.videoBackground}>
        {/* <iframe
          width="100%"
          height="100%"
          src="https://rutube.ru/play/embed/109f18e44b80545de8d3e6cfe860a5f8?autoplay=1&muted=1&ui=0"
          allow="clipboard-write; autoplay"
          allowFullScreen
        ></iframe> */}
        <video autoPlay muted loop playsInline>
          <source src="./PUIG2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className={styles.shadowWrapper}>
        <div className="w-fixed flex space-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-30"
          >
            <h1 className={styles.heroText}>
              Твой парфюмерный гид в мире брендов PUIG
            </h1>
          </motion.div>

          {/* <motion.div
            className={styles.buttonWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className={styles.heroButton}>авторизироваться</button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
