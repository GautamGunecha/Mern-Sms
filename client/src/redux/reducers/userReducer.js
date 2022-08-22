import * as actionTypes from "../actions/actionType";

const initialState = {
  contactLists: [],
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
