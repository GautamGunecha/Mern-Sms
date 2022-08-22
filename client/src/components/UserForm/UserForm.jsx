import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../Card/Card";
import { createNewContact } from "../../redux/actions/userActions";
import "./UserForm.css";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState(Number);

  const dispatch = useDispatch();

  const handleManualFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      contactNumber,
    };

    dispatch(createNewContact(data));
  };
  return (
    <div className="userForm">
      {/* custom form */}
      <Card>
        <form onSubmit={handleManualFormSubmit} className="manual-form">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Contact Number</label>
          <input
            type="number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <button type="submit">Submit Details</button>
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
