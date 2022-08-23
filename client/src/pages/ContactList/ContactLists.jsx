import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllContacts, deleteContact } from "../../redux/actions/userActions";
import Card from "../../components/Card/Card";
import "./ContactLists.css";

const ContactLists = () => {
  const dispatch = useDispatch();
  const { contactLists } = useSelector((state) => state.contacts);
  const { loading } = useSelector((state) => state.alert);

  const deleteUser = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div className="contactLists">
      <h1>Contacts Lists</h1>
      {loading ? <p className="loading">Loading...</p> : ""}
      {contactLists.map((data) => (
        <Card key={data._id}>
          <div className="user-list">
            <p>
              Full Name:{" "}
              <span>
                {data.firstName} {data.lastName}
              </span>{" "}
            </p>

            <section>
              <button onClick={() => deleteUser(data._id)} className="del-btn">
                Delete Contact
              </button>
              <button className="send-btn">
                <Link to={`/user/${data._id}`}>Get User Info</Link>
              </button>
            </section>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContactLists;
