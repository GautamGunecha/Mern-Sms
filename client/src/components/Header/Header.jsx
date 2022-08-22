import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Sms</h1>
      </Link>
      <section>
        <Link to="/contacts">
          <p>Contact Lists</p>
        </Link>
        <p>Sms Details</p>
      </section>
    </div>
  );
};

export default Header;
