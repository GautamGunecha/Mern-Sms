import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";

import "./ContactDetails.css";

const ContactDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);

  return <div className="contactDetails"></div>;
};

export default ContactDetails;
