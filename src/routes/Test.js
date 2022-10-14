import React, { useState, useEffect } from "react";

import Board from "../components/Board";
import Clock from "../components/Clock";

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

function Test(props) {
  function handleClick() {
    props.setGrid(generateGrid());
    props.setShowBoard(true);
    console.log(props);
  }
  return (
    <div>
      <p>Test</p>
      <button onClick={handleClick}>Click</button>
      <Clock />
      {props.showBoard && <Board grid={props.grid} seconds={props.seconds} />}
    </div>
  );
}

export default Test;
