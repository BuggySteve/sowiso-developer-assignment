//React utils
import React, { useState } from "react";

export default function Sum({ setUserAnswer }) {
  const [answer, setAnswer] = useState(null);
  const [hasError, setHasError] = useState(false);

  const handleAnswerClick = () => {
    setUserAnswer(null);
    setHasError(false);
    answer === ""
      ? setHasError(true)
      : answer === null
      ? setHasError(true)
      : !isNaN(answer)
      ? setUserAnswer(answer)
      : setHasError(true);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 px-3">
      <div className="flex justify-between text-6xl">
        <input
          type="text"
          placeholder="???"
          className="w-full border-2 rounded-md border-gray-400 text-center activie:border-blue-300"
          value={answer ? answer : ""}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleAnswerClick()}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 focus:bg-indigo-500 focus:outline-none text-white rounded-br-xl rounded-tl-xl h-24 text-6xl "
      >
        Yes!
      </button>
      {hasError ? (
        <span className="text-red-500 text-4xl">Numbers only please!</span>
      ) : (
        " "
      )}
    </div>
  );
}
