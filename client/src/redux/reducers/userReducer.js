import * as actionTypes from "../actions/actionType";

const initialState = {
  contactLists: [],
};

export const createNewContactReducer = (state = {}, action) => {
  if (actionTypes.CREATE_NEW_CONTACT)
    return { ...state, state: action.payload };
  return state;
};

export const getAllContactsReducer = (state = initialState, action) => {
  if (actionTypes.GET_ALL_USERS_DETAIL)
    return { ...state, contactLists: action.payload };
  return state;
};
