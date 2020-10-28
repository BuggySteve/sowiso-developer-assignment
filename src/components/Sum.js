//React utils
import React from "react";

export default function Sum({ a, b }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-6 px-3">
      <div className="flex justify-between text-6xl">
        <span>{a}</span> + <span>{b}</span> = <span>?</span>
      </div>
    </div>
  );
}
