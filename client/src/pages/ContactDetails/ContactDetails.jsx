import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";

import "./ContactDetails.css";
import Card from "../../components/Card/Card";

const ContactDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const handleNavigation = () => {
    navigate("/send/sms", {
      state: {
        id,
        contactNumber: user.contactNumber,
      },
    });
  };

  return (
    <div className="contactDetails">
      <Card>
        <p>
          Full Name:{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
        </p>

        <p>
          Contact Number: <span>{user.contactNumber}</span>
        </p>
        <button onClick={handleNavigation}>Send Message</button>
      </Card>
    </div>
  );
};

export default ContactDetails;
