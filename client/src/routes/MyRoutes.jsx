import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import ContactList from "../pages/lists/ContactList";

import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts/lists" element={<ContactList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
