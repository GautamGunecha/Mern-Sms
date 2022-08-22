import * as actionTypes from "../constants/actionType";

const initialState = { contacts: [] };

export const createNewContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      const userDetail = action.payload;
      const ifUserExists = state.contacts.find(
        (user) => user.number === userDetail.number
      );

      if (ifUserExists) {
        return {
          ...state,
          contacts: state.contacts.map((x) =>
            x.number === ifUserExists.number ? userDetail : x
          ),
        };
      } else {
        return {
          ...state,
          contacts: [...state.contacts, userDetail],
        };
      }

    case actionTypes.CREATE_NEW_CONTACT_FAILED:
      return [];

    case actionTypes.REMOVE_USER_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((x) => x.number !== action.payload),
      };
    default:
      return state;
  }
};
