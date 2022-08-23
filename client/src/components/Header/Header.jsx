import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <h1>Sms</h1>
      </a>
      <section>
        <p>Sms Details</p>
      </section>
    </div>
  );
};

export default Header;
