import * as actionTypes from "../actions/actionType";

const initialState = {
  contactAdded: [],
  contactLists: [],
  user: [],
  otpSuccess: false,
};

export const getAllContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return { ...state, contactAdded: action.payload };

    case actionTypes.GET_ALL_USERS_DETAIL:
      return { ...state, contactLists: action.payload };

    case actionTypes.DELETE_USER:
      return { ...state, contactLists: action.payload };

    case actionTypes.GET_USER_DETAIL:
      return { ...state, user: action.payload };

    case actionTypes.SEND_OTP:
      return { ...state, otpSuccess: action.payload };

    default:
      return state;
  }
};
