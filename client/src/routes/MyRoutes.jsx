import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Notification from "../components/Notification/Notification";
import ContactLists from "../pages/ContactList/ContactLists";
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Notification />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<ContactLists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
