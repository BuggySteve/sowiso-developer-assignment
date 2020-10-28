//Styles
import "./tailwind.output.css";

//Components
import Logo from "./components/Logo";

//React utils
import React, { useState, useEffect } from "react";

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const getRandomNumber = (min, max) => {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
  };

  return (
    <div className="App">
      <Logo />
    </div>
  );
}
