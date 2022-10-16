import React, { useState, useEffect } from "react";

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

function Generator(props) {
  function handleClick() {
    props.setGrid(generateGrid());
    props.setShowBoard(true);
    console.log(props);
  }
  return (
    <div className="generator">
      <div className="generator_top">
        <Clock />
        <button onClick={handleClick}>Create 2D Grid</button>
      </div>
      {props.showBoard && (
        <Board grid={props.grid} seconds={props.seconds} code={props.code} />
      )}
      {props.showBoard && (
        <div className="generator_bottom">
          <p>
            <span className="live"></span>Live
          </p>
          <div className="code_now">Your code now: {props.code}</div>
        </div>
      )}
    </div>
  );
}

export default Generator;
