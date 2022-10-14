import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="generator">
            <p>Generator</p>
          </Link>
        </li>
        <li>
          <Link to="payments">
            <p>Payments</p>
          </Link>
        </li>
        <li>
          <Link to="test">
            <p>Test</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
