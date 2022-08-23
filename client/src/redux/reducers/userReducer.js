import * as actionTypes from "../actions/actionType";

const initialState = {
  contactLists: [],
  user: [],
  otpSuccess: false,
};

export const createNewContactReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return { ...state, state: action.payload };

    default:
      return state;
  }
};

export const getAllContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS_DETAIL:
      return { ...state, contactLists: action.payload };

    case actionTypes.DELETE_USER:
      return { ...state, contactLists: action.payload };

    default:
      return state;
  }
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DETAIL:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const sendOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_OTP:
      return { ...state, otpSuccess: action.payload };
    default:
      return state;
  }
};
