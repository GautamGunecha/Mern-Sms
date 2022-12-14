import * as actionTypes from "./actionType";
import server from "../../apis/server";

export const createNewContact = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });
  try {
    const response = await server.post("/add/contact", data).catch((error) => {
      dispatch({
        type: actionTypes.SEND_NOTIFICATION_ERROR,
        payload: error.response.data.msg,
      });
    });

    dispatch({
      type: actionTypes.SEND_NOTIFICATION_SUCCESS,
      payload: response.data.msg,
    });

    dispatch({
      type: actionTypes.CREATE_NEW_CONTACT,
      payload: response.data,
    });

    // get user instantly
    const user = await server.get("/all/contacts");

    dispatch({
      type: actionTypes.GET_ALL_USERS_DETAIL,
      payload: user.data,
    });

    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  }
};

export const getAllContacts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });
  try {
    const response = await server.get("/all/contacts");

    dispatch({
      type: actionTypes.GET_ALL_USERS_DETAIL,
      payload: response.data,
    });

    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  }
};

export const deleteContact = (_id) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });
  try {
    const response = await server.delete(`/delete/contact/${_id}`);

    dispatch({
      type: actionTypes.DELETE_USER,
      payload: [],
    });

    dispatch({
      type: actionTypes.GET_ALL_USERS_DETAIL,
      payload: response.data,
    });

    dispatch({
      type: actionTypes.SEND_NOTIFICATION_SUCCESS,
      payload: "User contact data deleted.",
    });

    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });

  try {
    const response = await server
      .get(`/user/${id}`)
      .catch((err) => console.log(err));

    dispatch({
      type: actionTypes.GET_USER_DETAIL,
      payload: response.data,
    });

    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  }
};

export const sendOtp = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });
  try {
    // send otp function
    const response = await server.post("/send/sms", data).catch((error) => {
      dispatch({
        type: actionTypes.SEND_NOTIFICATION_ERROR,
        payload: error.response.data.msg,
      });
    });

    dispatch({
      type: actionTypes.SEND_OTP,
      payload: true,
    });

    dispatch({
      type: actionTypes.SEND_NOTIFICATION_SUCCESS,
      payload: response.data.msg,
    });

    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOADING,
      payload: false,
    });
  }
};
