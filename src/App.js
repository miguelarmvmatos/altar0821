import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Payments from "./routes/Payments";
import Generator from "./routes/Generator";

import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

function App() {
  const d = new Date();
  const s = d.getSeconds();

  const [grid, setGrid] = useState(generateGrid());
  const [showBoard, setShowBoard] = useState(false);
  const [seconds, setSeconds] = useState(s);
  const [payment, setPayment] = useState([]);

  const time = formatTime(seconds) + seconds;
  const secondsSplit = time.toString().split("");
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

  console.log("app", grid, showBoard, code);

  useEffect(() => {
    if (showBoard) {
      setTimeout(function () {
        setShowBoard(false);
        setGrid(generateGrid());
        setShowBoard(true);
      }, 2000);
    }
  }, [grid]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="payments"
            element={
              <Payments
                grid={grid}
                showBoard={showBoard}
                code={code}
                setPayment={setPayment}
                payment={payment}
              />
            }
          />
          <Route
            path="generator"
            element={
              <Generator
                setGrid={setGrid}
                grid={grid}
                setShowBoard={setShowBoard}
                showBoard={showBoard}
                seconds={seconds}
                code={code}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
