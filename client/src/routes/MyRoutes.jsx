import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Notification from "../components/Notification/Notification";
import ContactDetails from "../pages/ContactDetails/ContactDetails";
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Notification />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:id" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
