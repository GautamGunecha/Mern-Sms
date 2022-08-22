import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="='/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
