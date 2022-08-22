import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createNewContactReducer } from "./reducers/createContactReducer";

const rootReducer = combineReducers({
  phoneBook: createNewContactReducer,
});

const getDetailsFromLocalStorage = localStorage.getItem("contacts")
  ? JSON.parse(localStorage.getItem("contacts"))
  : [];

const initialState = {
  phoneBook: { contacts: getDetailsFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
