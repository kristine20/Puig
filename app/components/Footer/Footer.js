"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
import styles from "./Footer.module.css";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
    setTimeout(() => setIsModalActive(true), 10);
  };
  const closeModal = () => {
    setIsModalActive(false);
    setTimeout(() => setIsModalVisible(false), 300);
  };
  return (
    <>
      <footer className={`${styles.footer}`}>
        <section className={`${styles.footerWrapper} pt-2`}>
          <div className={`w-fixed  ${styles.footerContent}`}>
            <div className="row">
              <h1>Тест PUIG</h1>
              <button className="mt-1" onClick={openModal}>
                пройти тест
              </button>
            </div>
          </div>
        </section>
      </footer>

      {isModalVisible && (
        <Modal
          isModalActive={isModalActive}
          closeModal={() => setIsModalActive(false)}
          questionData={{
            index: 1,
            total: 5,
            question: "В каком году основана компания PUIG?",
            answers: ["1984", "1922", "1956", "1914"],
          }}
          onAnswerSelect={(answer) => console.log("Selected:", answer)}
        />
      )}
    </>
  );
};
export default Footer;
