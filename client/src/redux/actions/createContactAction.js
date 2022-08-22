import * as actionTypes from "../constants/actionType";
import server from "../../apis/server";

export const createNewContactAction = (data) => async (dispatch, getState) => {
  try {
    const response = await server.post("/new/contact", data);

    dispatch({
      type: actionTypes.CREATE_NEW_CONTACT,
      payload: response.data,
    });

    localStorage.setItem(
      "contacts",
      JSON.stringify(getState().phoneBook.contacts)
    );
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_NEW_CONTACT_FAILED,
      payload: [],
    });
  }
};

export const removeUserContact = (number) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_USER_CONTACT,
      payload: number,
    });
    localStorage.setItem(
      "contacts",
      JSON.stringify(getState().phoneBook.contacts)
    );
  } catch (error) {
    dispatch({
      type: actionTypes.REMOVE_USER_CONTACT,
      payload: [],
    });
  }
};
