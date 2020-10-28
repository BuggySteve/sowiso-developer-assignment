//Styles
import "./tailwind.output.css";

//Components
import Loader from "./components/Loader";
import Logo from "./components/Logo";
import Sum from "./components/Sum";
import AnswerForm from "./components/AnswerForm";
import Feedback from "./components/Feedback";

//React utils
import React, { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  useEffect(() => {
    //Create sum on app init
    let a = getRandomNumber(1, 1000);
    let b = getRandomNumber(1, 1000);
    setA(a);
    setB(b);
    setCorrectAnswer(a + b);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const checkAnswer = () => {
    correctAnswer == userAnswer
      ? setAnswerIsCorrect(true)
      : setAnswerIsCorrect(false);
  };
  useEffect(() => {
    userAnswer != null && checkAnswer();
  }, [userAnswer]);

  const getRandomNumber = (min, max) => {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Logo />
          <Sum a={a} b={b} />
          <AnswerForm setUserAnswer={setUserAnswer} />
          {userAnswer != null && answerIsCorrect ? (
            <Feedback positive={true} />
          ) : userAnswer != null && !answerIsCorrect ? (
            <Feedback positive={false} />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
