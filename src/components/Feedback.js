//React utils
import React from "react";

export default function Feedback({ positive }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 px-3">
      <div className="flex justify-between text-6xl">
        {positive ? (
          <span className="text-green-500 text-6xl">Good job!</span>
        ) : (
          <span className="text-red-500 text-6xl">Incorrect... Try again!</span>
        )}
      </div>
    </div>
  );
}
