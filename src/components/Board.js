import React, { useState, useEffect } from "react";

import "../styles/board.css";

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

function Board() {
  const [grid, setGrid] = useState(generateGrid);
  return (
    <div className="board">
      <div className="board_header">
        <div className="cell"></div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="cell">
            {rowIndex}
          </div>
        ))}
      </div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="table_row" value={rowIndex}>
          <div key={rowIndex}>{rowIndex}</div>
          {row.map((col, colIndex) => (
            <div key={colIndex} className="cell">
              {col} {colIndex} {rowIndex}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
