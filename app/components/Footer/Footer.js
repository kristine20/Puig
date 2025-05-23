"use client";
import { useState } from "react";

import Modal from "../Modal/Modal";
import styles from "./Footer.module.css";

const questions = [
  {
    question: "В каком году был основан модный дом Jean Paul Gaultier:",
    answers: ["1976", "1978", "1980", "1992"],
    correctAnswer: "1976",
  },
  {
    question: "В чем/ком находил будущий маэстро свое вдохновение:",
    answers: [
      "Медвежонок Нана, сладости, игра в футбол",
      "Бабушкины рассказы, общение с друзьями, кино",
      "Медвежонок Нана, кабаре, бабушка",
      "Песни, кино, кабаре",
    ],
    correctAnswer: "Медвежонок Нана, кабаре, бабушка",
  },
  {
    question: "Какой новый мужской предмет гардероба Готье внес в 1986 году:",
    answers: ["Тельняшка", "Корсет", "Юбка", "Шапка моряка"],
    correctAnswer: "Юбка",
  },
  {
    question:
      "Какой предмет женского гардероба стал знаковым для многих коллекций Готье:",
    answers: ["Корсет", "Чулки", "Шляпа", "Очки"],
    correctAnswer: "Корсет",
  },
  {
    question: "Когда появился первый аромат и как он назывался:",
    answers: [
      "1998, Classique",
      "1995, Le Male",
      "1993, Classique",
      "1990, Scandal",
    ],
    correctAnswer: "1993, Classique",
  },
  {
    question: "Сколько парфюмерных вселенных в бренде:",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Назовите ключевые ноты аромата Le Male:",
    answers: [
      "Мята, бергамот, имбирь",
      "Мята, лаванда, ваниль",
      "Мята, бергамот, ваниль",
      "Лаванда, грейпфрут, кедр",
    ],
    correctAnswer: "Мята, лаванда, ваниль",
  },
  {
    question: "Овердоза в аромате SCANDAL:",
    answers: ["Пралине", "Гардения", "Цветы апельсина", "Мед"],
    correctAnswer: "Мед",
  },
  {
    question: "Овердоза в аромате SCANDAL POUR HOMME:",
    answers: ["Бобы тонка", "Сандал", "Ветивер", "Карамель"],
    correctAnswer: "Бобы тонка",
  },
  {
    question: "Назовите ноты в аромате LA BELLE:",
    answers: [
      "Ваниль, груша, роза, яблоко, бергамот, ветивер",
      "Груша, тубероза, ваниль, карамель, бобы тонка",
      "Яблоко, груша, малина, жасмин, кедр",
      "Бергамот, груша, уд, сандал, тубероза",
    ],
    correctAnswer: "Ваниль, груша, роза, яблоко, бергамот, ветивер",
  },
];

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const openModal = () => {
    setCurrentIndex(0);
    setIsFinished(false);
    setIsModalVisible(true);
    setTimeout(() => setIsModalActive(true), 10);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setTimeout(() => setIsModalVisible(false), 300);
  };

  const handleAnswerSelect = (answer) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: answer,
        correct: currentQuestion.correctAnswer,
        isCorrect,
      },
    ]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
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
          closeModal={closeModal}
          isFinished={isFinished}
          userAnswers={userAnswers}
          questionData={
            isFinished
              ? {
                  question: "",
                  answers: [],
                }
              : {
                  index: currentIndex + 1,
                  total: questions.length,
                  ...questions[currentIndex],
                }
          }
          onAnswerSelect={handleAnswerSelect}
        />
      )}
    </>
  );
};

export default Footer;
