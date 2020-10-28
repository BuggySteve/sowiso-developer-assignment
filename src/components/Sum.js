//React utils
import React, { useState, useEffect } from "react";

export default function Sum({ a, b }) {
  return (
    <div className="max-w-xl mx-auto mt-6">
      <div className="flex justify-between">
        <span>{a}</span> + <span>{b}</span>
      </div>
    </div>
  );
}
