import React, { useState } from "react";

import Board from "../components/Board";
import Clock from "../components/Clock";

import "../styles/generator.css";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const getRandomLetterRow = (size) =>
  Array.from({ length: size }, () => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  });

const generateGrid = (size = 10) => {
  return Array.from({ length: size }, () => {
    return getRandomLetterRow(size);
  });
};

function Generator() {
  const [showBoard, setShowBoard] = useState(false);
  const [customLetter, setCustomLetter] = useState();
  const [grid, setGrid] = useState();

  const d = new Date();
  const s = d.getSeconds();
  function handleClick() {
    setShowBoard(false);

    setTimeout(function () {
      setGrid(generateGrid());
      setShowBoard(true);
    }, 5);
  }
  useState(() => {
    console.log("showboard", showBoard);
    setGrid(generateGrid());
  }, []);
  return (
    <div className="generator">
      <input
        type="text"
        placeholder="Type"
        onChange={(e) => setCustomLetter(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      <Clock />
      {showBoard && (
        <Board grid={grid} seconds={s} customLetter={customLetter} />
      )}
    </div>
  );
}

export default Generator;
