import React from "react";

import "../styles/board.css";

function Board(props) {
  const grid = props.grid;

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
          <div key={rowIndex} className="cell">
            {rowIndex}
          </div>
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
