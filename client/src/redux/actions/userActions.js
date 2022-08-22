import * as actionTypes from "./actionType";
import server from "../../apis/server";

export const createNewContact = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.LOADING,
    payload: true,
  });
  try {
    const response = await server.post("/add/contact", data);

    dispatch({
      type: actionTypes.CREATE_NEW_CONTACT,
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
