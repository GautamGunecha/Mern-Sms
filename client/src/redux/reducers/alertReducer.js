import { LOADING } from "../actions/actionType";

const initialState = { loading: false };

export const loadingReducer = (state = initialState, action) => {
  if (action.type === LOADING) return { ...state, loading: action.payload };
  return state;
};
