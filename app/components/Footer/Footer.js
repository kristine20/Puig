"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
import "./Footer.css";

export default function Footer() {
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
      <footer>
        <section className="footer_wrapper pt-2">
          <div className="w-fixed footer-content">
            <div className="row">
              <h1>Тест PUIG</h1>
              <button className="mt-1" onClick={openModal}>
                пройти тест
              </button>
            </div>
          </div>
        </section>
      </footer>

      {/* Modal */}
      {isModalVisible && (
        <Modal
          isModalActive={isModalActive}
          closeModal={closeModal}
          setIsModalActive={setIsModalActive}
        />
      )}
    </>
  );
}
