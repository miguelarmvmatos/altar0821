import React, { useState, useEffect } from "react";

import "../styles/board.css";

function formatTime(val) {
  if (val < 10) {
    return "0";
  } else {
    return "";
  }
}

function formatCode(val) {
  if (val > 9) {
    return "9";
  } else {
    return val;
  }
}

function Board(props) {
  const grid = props.grid;
  const seconds = formatTime(props.seconds) + props.seconds;
  const secondsSplit = seconds.toString().split("");
  const row = grid[secondsSplit[0]];
  const column = grid[secondsSplit[1]];
  const occurrences = grid
    .flat()
    .reduce(
      (count, value) => (
        count[value] ? ++count[value] : (count[value] = 1), count
      ),
      {}
    );
  const code =
    formatCode(occurrences[row[secondsSplit[1]]]).toString() +
    formatCode(occurrences[column[secondsSplit[0]]]).toString();
  useEffect(() => {
    console.log(
      "props",
      props,
      grid,
      seconds,
      secondsSplit,
      row[secondsSplit[1]],
      column[secondsSplit[0]],
      occurrences,
      occurrences[row[secondsSplit[1]]],
      occurrences[column[secondsSplit[0]]],
      code
    );
  }, []);

  return (
    <div className="board">
      <p>{code}</p>
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
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
