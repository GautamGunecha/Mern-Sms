import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewContact } from "../../redux/actions/userActions";

import Card from "../Card/Card";
import "./UserForm.css";

const JsonForm = () => {
  const [jsonFile, setJsonFile] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();

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
  );
};

export default JsonForm;
