// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// import "./brands.css";
// import TextVideoBio from "./textVideBio.js";
// import TextBio from "./textBio.js";
// import TextTimelineBio from "./texttimelineBio";
// const Brands = () => {
//   return (
//     <>
//       <section className="hero-brands-wrapper">
//         <div className="shadow-wrapper">
//           <div className="w-fixed flex space-between ">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.5 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h1 className="hero-brand-text">Carolina Herrera</h1>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       <section className="w-fixed brand-content-wrapper pt-1">
//         <TextVideoBio className="w-70" />
//         <TextBio className="w-30" />
//         <TextTimelineBio />
//       </section>
//     </>
//   );
// };

// export default Brands;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import "./brands.css";
import TextVideoBio from "./textVideBio.js";
import TextBio from "./textBio.js";
import TextTimelineBio from "./texttimelineBio";

const brandOptions = [
  { id: "carolina", label: "Carolina Herrera" },
  { id: "dior", label: "Dior" },
  { id: "versace", label: "Versace" },
];

const carolinaBio = {
  subtitle: "Новое видение",
  paragraphs: [
    "Подход Каролины к созданию одежды вызвал большой интерес у искушенной светской публики. В своих коллекциях она первой стала использовать подплечники, аргументируя это тем, что с ними талия девушки выглядит уже и изящнее, а также начала экспериментировать с формой рукавов. В ее первой коллекции были представлены модели с очень широкими рукавами, которые она позаимствовала из викторианской эпохи и адаптировала к современной моде.",
    "Широкую известность компании принес 1986 год, когда Каролина стала дизайнером свадебного наряда Кэролайн Кеннеди, дочери бывшего американского президента. Фасон платья быстро приобрел огромную популярность, а в магазинах появилось большое количество его копий.",
    "В 1987 году Каролина Эррера подписала контракт с компанией PUIG, а уже в 1988 увидел свет ее первый аромат Carolina Herrera for Women с ярким аккордом туберозы. Успех аромата был ошеломительным, масштаб продаж оказался настолько велик, что позволил профинансировать очередную коллекцию одежды дизайнера. Впоследствии выход каждого аромата под маркой Carolina Herrera становился заметным событием в мире парфюмерии. И уже в 1995 году модный дом Carolina Herrera полностью вошел в состав компании Puig.",
    "В 2004 году CFDA (Совет модных дизайнеров Америки) назвал Каролину Эррера дизайнером года в сегменте женской одежды, а в 2008 году Эррера получила награду Geoffrey Beene Lifetime Achievement Award ― фэшн-аналог «Оскара» за вклад в развитие индустрии моды.",
  ],
};
const carolinaTimelineText = `Каролина Эррера де Баез, дочь Каролины Эрреры, с 1996 года занимает пост креативного директора парфюмерной линии Дома Carolina Herrera. Ее творческий талант и интуиция стали залогом успеха ароматов Дома моды. Каролина счастлива работать в дуэте с матерью ― это дает ей абсолютную свободу как при создании новых ароматов, так и при разработке коллекций линии CH Carolina Herrera.`;
const carolinaTimelineItems = [
  { year: 1939, content: "Рождение Каролины Эррера, Венесуэла, Каракас." },
  {
    year: 1970,
    content:
      "В 1970-х годах Каролина Эррера входит в список «100 самых стильных женщин Мира».",
  },
  { year: 1981, content: "Открытие Дома Моды Carolina Herrera." },
  { year: 1987, content: "Первая коллекция свадебных платьев." },
  { year: 1988, content: "Запуск аромата Carolina Herrera for Women." },
  { year: 1991, content: "Запуск аромата Herrera for Men." },
  { year: 1995, content: "Модный Дом вошёл в состав компании PUIG." },
  {
    year: 1996,
    content:
      "Дочь дизайнера, Каролина Эррера де Баез, приступает к работе в парфюмерном отделе Дома моды.",
  },
  { year: 1997, content: "Запуск женского аромата 212." },
  { year: 1999, content: "Запуск мужского аромата 212 Men." },
  {
    year: 2004,
    content:
      "Каролина Эррера получает награду CFDA — «Лучший дизайнер года в сегменте женской одежды» и премию американского журнала Glamour — «Женщина года». Запуск аромата Chic for Men.",
  },
  { year: 2009, content: "Запуск мужского аромата CH Men." },
  { year: 2015, content: "Запуск женского аромата CH Carolina Herrera." },
  {
    year: 2015,
    content: "Запуск нишевой коллекции ароматов Herrera Confidential.",
  },
  { year: 2016, content: "Запуск женского аромата Good Girl." },
  { year: 2018, content: "Новый креативный фешн-директор Уэс Гордон." },
  { year: 2019, content: "Запуск мужского аромата Bad Boy." },
];
const carolinaVideoBioSections = [
  {
    title: "Начало карьеры",
    content:
      " Начать дизайнерскую карьеру Каролину Эррера вдохновили отзывы окружающих, восторгающихся ее образами. Она несколько раз попадала на вершину списков самых стильных женщин мира, а самым узнаваемым стал ее образ в безупречно белой рубашке, черных брюках и красных лакированных туфлях.",
  },
  {
    title: "Переезд",
    content:
      "В 1980 году семья Эррера переехала в Нью-Йорк, где Каролина открыла собственную компанию Carolina Herrera Limited. Дебютной стала линия Carolina Herrera New York, первая коллекция которой состояла из 20 платьев и была презентована на сцене клуба Метрополитен.В 1980 году семья Эррера переехала в Нью-Йорк, где Каролина открыла собственную компанию...",
  },
];
const carolinaVideos = [
  { id: 1, url: "https://www.youtube.com/embed/xShF57dLhSk" },
  { id: 2, url: "https://www.youtube.com/embed/YCyZbdqugkw" },
];
const Brands = () => {
  const [activeBrand, setActiveBrand] = useState("carolina");

  return (
    <>
      <section className="hero-brands-wrapper">
        <div className="shadow-wrapper">
          <div className="w-fixed flex space-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="brand-links">
                {brandOptions.map((brand) => (
                  <button
                    key={brand.id}
                    className={`link-button
                       ${activeBrand === brand.id ? "activeBrand" : ""}`}
                    onClick={() => setActiveBrand(brand.id)}
                  >
                    <h1 className="hero-brand-text"> {brand.label}</h1>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-fixed brand-content-wrapper pt-1">
        {activeBrand === "carolina" && (
          <>
            <TextVideoBio
              sections={carolinaVideoBioSections}
              showVideoOnDesktop={true}
              videos={carolinaVideos}
            />
            <TextBio bioData={carolinaBio} videos={carolinaVideos} />
            <TextTimelineBio
              bioTimelineData={carolinaTimelineText}
              timelineItems={carolinaTimelineItems}
            />
          </>
        )}
        {activeBrand === "dior" && <div>Dior content here</div>}
        {activeBrand === "versace" && <div>Versace content here</div>}
      </section>
    </>
  );
};

export default Brands;

