"use client";

import Image from "next/image";

import closeIcon from "../../assets/images/close.svg";
import styles from "./Modal.module.css";

const Modal = ({
  isModalActive,
  closeModal,
  questionData = {
    index: 1,
    total: 1,
    question: "Default question?",
    answers: [],
  },
  onAnswerSelect = () => {},
}) => {
  const { index, total, question, answers } = questionData;

  return (
    <div
      className={`${styles.modalOverlay} ${isModalActive ? styles.active : ""}`}
      onClick={closeModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          <Image src={closeIcon} alt="Close" />
        </button>
        <div className={styles.modalContainer}>
          <div className={styles.questionsBlock}>
            <span className={styles.questionPaging}>
              вопрос {index} из {total}
            </span>
            <p className={styles.question}>{question}</p>
          </div>
          <div className={styles.answersBlock}>
            {answers.map((answer, i) => (
              <button
                key={i}
                className={styles.answerVersion}
                onClick={() => onAnswerSelect(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
