import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./PhoneBook.css";
import Card from "../Card/Card";
import { createNewContactAction } from "../../redux/actions/createContactAction";

const PhoneBook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState(Number);

  const dispatch = useDispatch();

  const handleCustomFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      number: phoneNumber,
    };
    dispatch(createNewContactAction(data));
    alert("Contact added to list");

    setFirstName("");
    setLastName("");
    setphoneNumber("");
  };

  const handleJsonFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="phoneBook">
      <Card>
        <h1>Input Customer Details</h1>
        <form onSubmit={handleCustomFormSubmit} className="phoneBookForm">
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
            placeholder="Enter First Name"
          />

          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
            placeholder="Enter Last Name"
          />

          <label>Phone No. (with country code)</label>
          <input
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            type="number"
            required
            placeholder="Enter Phone Number"
          />

          <button type="submit">Submit</button>
        </form>
      </Card>
      <Card>
        <h1>Input Json File</h1>
        <form onSubmit={handleJsonFormSubmit} className="phoneBookForm">
          <textarea required rows={14} cols={70} />
          <button>Import Data</button>
        </form>
      </Card>
    </div>
  );
};

export default PhoneBook;
