import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Send OTP</h1>
      </Link>

      <Link to="/contacts/lists">
        <p>Contact Lists</p>
      </Link>
    </div>
  );
};

export default Header;
