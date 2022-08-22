import React, { useState } from "react";

import "./PhoneBook.css";
import Card from "../Card/Card";
import server from "../../apis/server";

const PhoneBook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState(Number);

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleCustomFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phoneNumber,
    };

    await server
      .post("/new/contact", data)
      .then((res) => {
        setErr("");
        if (res.data) {
          setMsg("Contact Save to contact list");
          setFirstName("");
          setLastName("");
          setphoneNumber("");
        }
      })
      .catch((err) => {
        setMsg("");
        setErr(err.response.data.msg);
      });
  };

  const handleJsonFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="phoneBook">
      <Card>
        <h1>Input Customer Details</h1>

        {msg ? <p className="success">{msg}</p> : ""}
        {err ? <p className="error">{err}</p> : ""}
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
