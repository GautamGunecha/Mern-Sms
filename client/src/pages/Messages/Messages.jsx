import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Messages.css";
import Card from "../../components/Card/Card";
import server from "../../apis/server";

const Messages = () => {
  const [msg, setMsg] = useState("");
  const [otp, setOTP] = useState();

  const location = useLocation();
  const contactNumber = location.state.contactNumber;

  const generateOTP = () => {
    const minVal = 100000;
    const maxVal = 999999;

    const randomNumber = Math.floor(
      Math.random() * (maxVal - minVal + 1) + minVal
    );

    setOTP(randomNumber);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await server.post("/");
  };

  useEffect(() => {
    setMsg(`Hi Your Otp is ${otp}`);
    generateOTP();
  }, []);

  return (
    <div className="messages">
      <Card>
        <div className="">
          <input type="text" value={msg} readOnly />
          <button onClick={sendMessage}>Send</button>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
