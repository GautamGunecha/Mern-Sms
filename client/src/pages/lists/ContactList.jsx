import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ContactList.css";
import { removeUserContact } from "../../redux/actions/createContactAction";
import Card from "../../components/Card/Card";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.phoneBook);
  const dispatch = useDispatch();

  const removeContacts = (number) => {
    dispatch(removeUserContact(number));
    alert("Contact Removed!");
  };

  const userContactLists = () => {
    return (
      <>
        {contacts.map((data) => (
          <Card key={data.number}>
            <div className="userLists">
              <p>
                {data.firstName} {data.lastName}
              </p>
              <p>Contact Number: {data.number}</p>

              <section>
                <button
                  className="btn-remove"
                  onClick={() => removeContacts(data.number)}
                >
                  Remove
                </button>
                <button className="btn-reqotp">Send Message</button>
              </section>
            </div>
          </Card>
        ))}
      </>
    );
  };

  return (
    <div className="contactLists">
      {contacts.length === 0 ? <p>No Contacts Found</p> : ""}
      {userContactLists()}
    </div>
  );
};

export default ContactList;
