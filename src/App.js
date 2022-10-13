import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Generator from "./routes/Generator";
import Payments from "./routes/Payments";

import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="generator" element={<Generator />} />
          <Route path="payments" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
