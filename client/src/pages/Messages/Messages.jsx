import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Messages.css";
import Card from "../../components/Card/Card";
import server from "../../apis/server";

const Messages = () => {
  const [msg, setMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const location = useLocation();
  const contactNumber = location.state.contactNumber;
  const id = location.state.id;
  console.log(id);

  const generateOTP = () => {
    const minVal = 100000;
    const maxVal = 999999;

    const randomNumber = Math.floor(
      Math.random() * (maxVal - minVal + 1) + minVal
    );

    setMsg(`Hi Your Otp is ${randomNumber}`);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await server
      .post("/send/sms", {
        text: msg,
        receiver: contactNumber,
        id,
      })
      .then((res) => setSuccessMsg(res.data.msg))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateOTP();
  }, []);

  return (
    <div className="messages">
      {successMsg && <p className="successMsg">{successMsg}</p>}
      {contactNumber ? (
        <Card>
          <div className="generate-msg">
            <p>Sending Msg to: {contactNumber}</p>
            <input type="text" value={msg} readOnly />
            <button onClick={sendMessage}>Send</button>
          </div>
        </Card>
      ) : (
        <p>Please Select user to send sms</p>
      )}
    </div>
  );
};

export default Messages;
