import React, { useEffect, useState } from "react";
import server from "../../apis/server";

import Card from "../../components/Card/Card";
import "./ContactList.css";

const ContactList = () => {
  const [data, setData] = useState([]);

  const removeContacts = async (id) => {
    await server.delete("/delete/contact", { id });
  };
  useEffect(() => {
    const fetchContacts = async () => {
      await server
        .get("/all/contacts")
        .then((res) => setData(res.data))
        .catch((err) => {
          setData([]);
          console.log(err);
        });
    };
    fetchContacts();
  }, []);

  return (
    <div className="contactLists">
      {data.length === 0 ? <h1>No contacts found!</h1> : ""}
      {data.map((content) => (
        <Card key={content._id}>
          <div className="lists">
            <p>
              Full Name: {content.firstName} {content.lastName}
            </p>
            <p>Contact Number: {content.phoneNumber}</p>
            <section>
              <button className="remove-btn">Remove Contact</button>
              <button className="sms-btn">Send Sms</button>
            </section>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
