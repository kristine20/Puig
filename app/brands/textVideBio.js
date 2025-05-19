// "use client";
// import { motion } from "framer-motion";
// import "./brands.css";

// import { useWindowWidth } from "../hooks";
// import VideoSlider from "./videoSlider";

// const TextVideoBio = () => {
//   const width = useWindowWidth();
//   const isDesktop = width >= 768;

//   return (
//     <>
//       <div className="bio-text-video-wrapper">
//         <motion.div
//           className="brand-bio-text-wrapper"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.4 }}
//           transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
//         >
//           <div className="brand-bio-content-item">
//             <h2 className="bio-subtitle">Начало карьеры</h2>
//             <p className="bio-text pt-20">
//               Начать дизайнерскую карьеру Каролину Эррера вдохновили отзывы
//               окружающих, восторгающихся ее образами. Она несколько раз попадала
//               на вершину списков самых стильных женщин мира, а самым узнаваемым
//               стал ее образ в безупречно белой рубашке, черных брюках и красных
//               лакированных туфлях.
//             </p>
//           </div>
//           <div className="brand-bio-content-item">
//             <h2 className="bio-subtitle">Переезд</h2>
//             <p className="bio-text pt-20">
//               В 1980 году семья Эррера переехала в Нью-Йорк, где Каролина
//               открыла собственную компанию Carolina Herrera Limited. Дебютной
//               стала линия Carolina Herrera New York, первая коллекция которой
//               состояла из 20 платьев и была презентована на сцене клуба
//               Метрополитен.
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {isDesktop && (
//         <div className="brand-bio-videos-wrapper w-70">
//           <VideoSlider />
//         </div>
//       )}
//     </>
//   );
// };

// export default TextVideoBio;

"use client";
import { motion } from "framer-motion";
import "./brands.css";
import { useWindowWidth } from "../hooks";
import VideoSlider from "./videoSlider";

const TextVideoBio = ({ sections, showVideoOnDesktop = true, videos }) => {
  const width = useWindowWidth();
  const isDesktop = width >= 650;

  return (
    <>
      <div className="bio-text-video-wrapper">
        <motion.div
          className="brand-bio-text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          {sections.map((section, index) => (
            <div className="brand-bio-content-item" key={index}>
              <h2 className="bio-subtitle">{section.title}</h2>
              <p className="bio-text pt-20">{section.content}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {isDesktop && showVideoOnDesktop && (
        <div className="brand-bio-videos-wrapper w-70">
          <VideoSlider videos={videos} />
        </div>
      )}
    </>
  );
};

export default TextVideoBio;
