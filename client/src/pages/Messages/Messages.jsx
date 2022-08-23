import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Messages.css";
import Card from "../../components/Card/Card";
import { sendOtp } from "../../redux/actions/userActions";

const Messages = () => {
  const [msg, setMsg] = useState("");

  const location = useLocation();
  const contactNumber = location.state.contactNumber;
  const id = location.state.id;

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);

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
    const data = {
      text: msg,
      receiver: contactNumber,
      id,
    };
    dispatch(sendOtp(data));
  };

  useEffect(() => {
    generateOTP();
  }, []);

  return (
    <div className="messages">
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
