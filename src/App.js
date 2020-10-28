//Styles
import "./tailwind.output.css";

//Components
import Loader from "./components/Loader";
import Logo from "./components/Logo";
import Sum from "./components/Sum";

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
    setA(getRandomNumber(1, 1000));
    setB(getRandomNumber(1, 1000));
    setCorrectAnswer(a + b);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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
        </div>
      )}
    </>
  );
}
