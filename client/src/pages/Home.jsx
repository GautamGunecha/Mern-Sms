import React from "react";
import UserForm from "../components/UserForm/UserForm";
import ContactLists from "./ContactList/ContactLists";

const Home = () => {
  return (
    <div>
      <UserForm />
      <div>
        <ContactLists />
      </div>
    </div>
  );
};

export default Home;
