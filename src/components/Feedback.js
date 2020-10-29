//React utils
import React from "react";

//Third party
import Fade from "react-reveal/Fade";

export default function Feedback({ positive }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 px-3">
      <div className="flex justify-between text-6xl">
        {positive ? (
          <Fade>
            <span className="text-green-500 text-6xl">Good job!</span>
          </Fade>
        ) : (
          <Fade>
            <span className="text-red-500 text-6xl">
              Incorrect... Try again!
            </span>
          </Fade>
        )}
      </div>
    </div>
  );
}
