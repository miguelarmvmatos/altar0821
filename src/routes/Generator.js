import React, { useState } from "react";

import Board from "../components/Board";

import "../styles/generator.css";

function Generator() {
  const [showBoard, setShowBoard] = useState(false);
  function handleClick() {
    setShowBoard(false);

    setTimeout(function () {
      setShowBoard(true);
    }, 5);
  }
  return (
    <div className="generator">
      <button onClick={handleClick}>Click</button>
      {showBoard && <Board />}
    </div>
  );
}

export default Generator;
