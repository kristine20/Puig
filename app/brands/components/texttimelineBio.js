// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import "./brands.css";
// import HistorySlider from "../components/History/History";
// import { useWindowWidth } from "../hooks";
// const items = [
//   { year: 1939, content: "Рождение Каролины Эррера, Венесуэла, Каракас." },
//   {
//     year: 1970,
//     content:
//       "В 1970-х годах Каролина Эррера входит в список «100 самых стильных женщин Мира».",
//   },
//   { year: 1981, content: "Открытие Дома Моды Carolina Herrera." },
//   { year: 1987, content: "Первая коллекция свадебных платьев." },
//   { year: 1988, content: "Запуск аромата Carolina Herrera for Women." },
//   { year: 1991, content: "Запуск аромата Herrera for Men." },
//   { year: 1995, content: "Модный Дом вошёл в состав компании PUIG." },
//   {
//     year: 1996,
//     content:
//       "Дочь дизайнера, Каролина Эррера де Баез, приступает к работе в парфюмерном отделе Дома моды.",
//   },
//   { year: 1997, content: "Запуск женского аромата 212." },
//   { year: 1999, content: "Запуск мужского аромата 212 Men." },
//   {
//     year: 2004,
//     content:
//       "Каролина Эррера получает награду CFDA — «Лучший дизайнер года в сегменте женской одежды» и премию американского журнала Glamour — «Женщина года». Запуск аромата Chic for Men.",
//   },
//   { year: 2009, content: "Запуск мужского аромата CH Men." },
//   { year: 2015, content: "Запуск женского аромата CH Carolina Herrera." },
//   {
//     year: 2015,
//     content: "Запуск нишевой коллекции ароматов Herrera Confidential.",
//   },
//   { year: 2016, content: "Запуск женского аромата Good Girl." },
//   { year: 2018, content: "Новый креативный фешн-директор Уэс Гордон." },
//   { year: 2019, content: "Запуск мужского аромата Bad Boy." },
// ];

// const TextTimelineBio = () => {
//   const width = useWindowWidth();
//   return (
//     <>
//       <motion.div
//         className="flex brand-bottom-content"
//         // initial={{ opacity: 0, y: 10 }}
//         // whileInView={{ opacity: 1, y: 0 }}
//         // viewport={{ once: false, amount: 0.4 }}
//         // transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
//       >
//         <p className="bio-text bio-text-width pt-2 ">
//           Каролина Эррера де Баез, дочь Каролины Эрреры, с 1996 года занимает
//           пост креативного директора парфюмерной линии Дома Carolina Herrera. Ее
//           творческий талант и интуиция стали залогом успеха ароматов Дома моды.
//           Каролина счастлива работать в дуэте с матерью ― это дает ей абсолютную
//           свободу как при создании новых ароматов, так и при разработке
//           коллекций линии CH Carolina Herrera.
//         </p>
//         <div className="vertical-slider-wrapper">
//           <HistorySlider
//             items={items}
//             title=""
//             buttonPosition="bottom"
//             direction={width <= 768 && width > 600 ? "vertical" : "horizontal"}
//           />
//         </div>
//       </motion.div>
//     </>
//   );
// };
// export default TextTimelineBio;
"use client";
import { motion } from "framer-motion";
import { useWindowWidth } from "../../hooks";
import "../brands.css";
import HistorySlider from "../../components/home/History/History";

const TextTimelineBio = ({ bioTimelineData, timelineItems }) => {
  const width = useWindowWidth();
  return (
    <motion.div className="flex brand-bottom-content">
      <p className="bio-text bio-text-width pt-2">{bioTimelineData}</p>
      <div className="vertical-slider-wrapper">
        <HistorySlider
          items={timelineItems}
          title=""
          buttonPosition="bottom"
          // direction={width <= 960 && width > 600 ? "vertical" : "horizontal"}
          direction={width <= 960 && width > 600 ? "horizontal" : "horizontal"}
        />
      </div>
    </motion.div>
  );
};

export default TextTimelineBio;
