"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import "./brands.css";
import TextVideoBio from "./textVideBio.js";
import TextBio from "./textBio.js";
import TextTimelineBio from "./texttimelineBio";
const Brands = () => {
  return (
    <>
      <section className="hero-brands-wrapper">
        <div className="shadow-wrapper">
          <div className="w-fixed flex space-between ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="hero-brand-text ">Carolina Herrera</h1>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-fixed brand-content-wrapper pt-1">
        <TextVideoBio className="w-70" />

        <TextBio className="w-30" />
        <TextTimelineBio />
      </section>
    </>
  );
};

export default Brands;

