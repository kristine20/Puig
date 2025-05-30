// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import carolinaBanner from "../assets/images/brands/brandbanner.jpg";
// import { brandBackgrounds, brandOptions } from "./data/brandsData";

// const BrandsNav = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const activeBrand = pathname?.split("/").pop(); // Get last segment
//   const bgImage = brandBackgrounds[activeBrand].src || carolinaBanner;
//   const bgVideo = brandBackgrounds[activeBrand].url || carolinaBanner;
//   const currentBrand = brandOptions.find((b) => b.id === activeBrand);
//   return (
//     <section
//       className="hero-brands-wrapper"
//       style={{ backgroundImage: `url(${bgImage.src})` }}
//     >
//       <video className="" autoPlay loop muted playsInline>
//         <source src={bgVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="shadow-wrapper">
//         <div className="w-fixed flex space-between">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="brand-links">
//               {currentBrand && (
//                 <h1 className="hero-brand-text">{currentBrand.label}</h1>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandsNav;

// components/BrandsNav.jsx or .tsx
"use client";
import { usePathname } from "next/navigation";

import carolinaBanner from "../assets/images/brands/brandbanner.jpg";
import { brandBackgrounds, brandOptions } from "./data/brandsData";
import Hero from "../components/home/Hero/Hero";

const BrandsNav = () => {
  const pathname = usePathname();
  const activeBrand = pathname?.split("/").pop();
  const bgImage = brandBackgrounds[activeBrand]?.src || carolinaBanner;
  const brandData = brandBackgrounds[activeBrand] || {};
  const currentBrand = brandOptions.find((b) => b.id === activeBrand);

  return (
    <Hero
      title={currentBrand?.label || "Our Brands"}
      videoSrc={brandData.url || ""}
      showPopup={true}
      bgImage={bgImage.src}
    />
  );
};

export default BrandsNav;
