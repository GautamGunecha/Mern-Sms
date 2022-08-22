import React from "react";

import Card from "../Card/Card";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="userForm">
      {/* custom form */}
      <Card>
        <form className="manual-form">
          <label>First Name</label>
          <input type="text" />

          <label>Last Name</label>
          <input type="text" />

          <label>Contact Number</label>
          <input type="number" />

          <button>Submit Details</button>
        </form>
      </Card>
      {/* json form */}
      <Card>
        <form className="json-form">
          <textarea cols="35" rows="15"></textarea>
          <button>Import JSON</button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
