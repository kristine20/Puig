"use client";
import { useState } from "react";

import bg from "../../assets/images/brands/carolina/test-carolina-herrera.jpg";
import Modal from "../../components/home/Modal/Modal";

const Test = ({ questions }) => {
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
    <div
      className="test-wrapper w-fixed"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`test-content`}>
        <p>Проверь себя</p>
        <h1>Тест Carolina Herrera</h1>
        <button className="mt-1" onClick={openModal}>
          Пройти Тест
        </button>
      </div>
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
    </div>
  );
};

export default Test;
