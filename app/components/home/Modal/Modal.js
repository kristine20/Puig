// "use client";

import Image from "next/image";

import closeIcon from "../../../assets/images/close.svg";
import styles from "./Modal.module.css";

const Modal = ({
  isModalActive,
  closeModal,
  isFinished = false,
  userAnswers = [],
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
          {!isFinished && (
            <div className={styles.questionsBlock}>
              <span className={styles.questionPaging}>
                вопрос {index} из {total}
              </span>
            </div>
          )}
          <p className={`${styles.question} ${styles.questionsBlock}`}>
            {question}
          </p>

          <div className={styles.answersBlock}>
            {isFinished ? (
              <>
                {/* {userAnswers.map((entry, i) => (
                  <div
                    key={i}
                    className={`${styles.answerVersion} ${
                      entry.isCorrect ? styles.correct : styles.wrong
                    }`}
                  >
                    <strong>Вопрос:</strong> {entry.question} <br />
                    <strong>Ваш ответ:</strong> {entry.selected} <br />
                    <strong>Правильный ответ:</strong> {entry.correct}
                  </div>
                ))}
                <button className={styles.answerVersion} onClick={closeModal}>
                  Закрыть
                </button> */}
                <div className={styles.resultSummary}>
                  <p>Спасибо за прохождение теста!</p>
                  <p>
                    Правильных ответов:{" "}
                    <strong>
                      {userAnswers.filter((a) => a.isCorrect).length}
                    </strong>{" "}
                    из <strong>{userAnswers.length}</strong>
                  </p>
                  <button className={styles.answerVersion} onClick={closeModal}>
                    Закрыть
                  </button>
                </div>
              </>
            ) : (
              answers.map((answer, i) => (
                <button
                  key={i}
                  className={styles.answerVersion}
                  onClick={() => onAnswerSelect(answer)}
                >
                  {answer}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
