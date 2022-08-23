import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../Card/Card";
import { createNewContact } from "../../redux/actions/userActions";
import "./UserForm.css";

const UserForm = () => {
  const [jsonFile, setJsonFile] = useState("");
  const [err, setErr] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const dispatch = useDispatch();

  const handleManualFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      contactNumber,
    };

    dispatch(createNewContact(data));
    setContactNumber("");
    setFirstName("");
    setLastName("");
  };

  const handleJsonForm = async (e) => {
    e.preventDefault();
    try {
      setErr("");
      const jsonData = await JSON.parse(jsonFile);
      for (let i = 0; i < jsonData.length; i++) {
        let data = {
          firstName: jsonData[i].firstName,
          lastName: jsonData[i].lastName,
          contactNumber: jsonData[i].contactNumber,
        };
        setTimeout(() => {
          dispatch(createNewContact(data));
        }, 2000);
      }
    } catch (error) {
      if (error) setErr("Invalid Json File");
    }
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
            required
            placeholder="Enter first name"
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Enter last name"
          />

          <label>Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            placeholder="+910000000000"
          />

          <button type="submit">Submit Details</button>
        </form>
      </Card>
      {/* json form */}
      <Card>
        <form onSubmit={handleJsonForm} className="json-form">
          <textarea
            value={jsonFile}
            onChange={(e) => setJsonFile(e.target.value)}
            cols="35"
            rows="15"
          ></textarea>
          {err && <p>{err}</p>}
          <button type="submit">Import JSON</button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
