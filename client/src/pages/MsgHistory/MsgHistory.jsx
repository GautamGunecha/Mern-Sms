import React, { useEffect, useState } from "react";
import moment from "moment";

import "./MsgHistory.css";
import server from "../../apis/server";
import Card from "../../components/Card/Card";

const MsgHistory = () => {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const fetchMsg = () => {
      server
        .get("/sms/history")
        .then((res) => setMsg(res.data))
        .catch((err) => console.log(err));
    };
    fetchMsg();
  }, []);

  return (
    <div className="msg-history">
      {msg.length === 0 && <h1>No Sms Details Found!</h1>}
      {msg?.map((data) => (
        <Card key={data._id}>
          <div className="msg-history-content">
            <p>
              Full Name:{" "}
              <span>
                {data.firstName} {data.lastName}
              </span>
            </p>
            <p>
              Contact Detail: <span>{data.contactNumber}</span>
            </p>
            <div>
              {data.messageHistory.map((item) => (
                <section className="previousMsg" key={item.msg}>
                  <p>{item.msg}</p>
                  <p>Date: {moment(item.date).format("MMM DD yyyy, HH:mm")}</p>
                </section>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MsgHistory;
