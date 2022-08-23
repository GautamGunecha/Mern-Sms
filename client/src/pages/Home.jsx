import React, { Fragment } from "react";
import UserForm from "../components/UserForm/UserForm";
import ContactLists from "./ContactList/ContactLists";

const Home = () => {
  return (
    <Fragment>
      <UserForm />
      <ContactLists />
    </Fragment>
  );
};

export default Home;
