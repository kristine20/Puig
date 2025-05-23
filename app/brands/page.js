"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import carolinaBanner from "../assets/images/brands/brandbanner.jpg";
import penhaligonsBanner from "../assets/images/brands/penhaligons-banner-cropped.jpg";
import lartisanparfumeurBanner from "../assets/images/brands/lartisanparfumeur-banner-cropped.png";
import pacorabanneBanner from "../assets/images/brands/pacorabanne-banner-cropped.png";
import ninaricciBanner from "../assets/images/brands/ninaricci-banner-cropped.jpg";
import jeanpaulgaultierBanner from "../assets/images/brands/jeanpaulgaultier-banner-cropped.png";
import banderasBanner from "../assets/images/brands/banderas-banner-cropped.jpg";
const brandOptions = [
  { id: "carolina", label: "Carolina Herrera" },
  { id: "penhaligons", label: "Penhaligon's" },
  { id: "lartisanparfumeur", label: "Lartisan-Parfumeur" },
  { id: "rabanne", label: "Rabanne" },
  { id: "ninaricci", label: "Nina Ricci" },
  { id: "jeanpaulgaultier", label: "Jean Paul Gaultier" },
  { id: "banderas", label: "Banderas" },
];
const brandBackgrounds = {
  carolina: carolinaBanner,
  penhaligons: penhaligonsBanner,
  lartisanparfumeur: lartisanparfumeurBanner,
  pacorabanne: pacorabanneBanner,
  ninaricci: ninaricciBanner,
  jeanpaulgaultier: jeanpaulgaultierBanner,
  banderas: banderasBanner,
};

const BrandsNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const activeBrand = pathname?.split("/").pop(); // Get last segment
  const bgImage = brandBackgrounds[activeBrand] || carolinaBanner;
  const currentBrand = brandOptions.find((b) => b.id === activeBrand);
  return (
    <section
      className="hero-brands-wrapper"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="shadow-wrapper">
        <div className="w-fixed flex space-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="brand-links">
              {currentBrand && (
                <h1 className="hero-brand-text">{currentBrand.label}</h1>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandsNav;
