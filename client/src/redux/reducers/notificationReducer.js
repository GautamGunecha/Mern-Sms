import {
  SEND_NOTIFICATION_ERROR,
  SEND_NOTIFICATION_SUCCESS,
} from "../actions/actionType";

const initialState = {
  message: "",
  error: "",
};

export const notificationReducer = (state = initialState, action) => {
  if (action.type === SEND_NOTIFICATION_SUCCESS)
    return { ...state, message: action.payload, error: "" };
  if (action.type === SEND_NOTIFICATION_ERROR)
    return { ...state, error: action.payload, message: "" };
  return state;
};
