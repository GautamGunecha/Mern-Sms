import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useSelector } from "react-redux";

const Notification = () => {
  const { message } = useSelector((state) => state.notify);
  const { error } = useSelector((state) => state.notify);

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  return <ToastContainer autoClose={2000} />;
};

export default Notification;
