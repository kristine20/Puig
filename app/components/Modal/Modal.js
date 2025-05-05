"use client";

import Image from "next/image";

import close from "../../assets/images/close.svg";
import "./Modal.css";

export default function Modal({ isModalActive, closeModal }) {
  return (
    <div
      className={`modal-overlay ${isModalActive ? "active" : ""}`}
      onClick={closeModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          <Image src={close} alt="Company" />
        </button>
        <div className="modal-container">
          <div className="questions-block">
            <span className="question-paging">вопрос 1 из 5</span>
            <p className="question">В каком году основана компания PUIG?</p>
          </div>
          <div className="answers-block">
            {" "}
            <button className="answer-version">1984</button>
            <button className="answer-version">1922</button>
            <button className="answer-version">1956</button>
            <button className="answer-version">1914</button>
          </div>
        </div>
      </div>
    </div>
  );
}
