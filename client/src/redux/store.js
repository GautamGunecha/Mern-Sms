import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/alertReducer";
import {
  createNewContactReducer,
  getAllContactsReducer,
} from "./reducers/userReducer";

const rootReducer = combineReducers({
  alert: loadingReducer,
  newContact: createNewContactReducer,
  contacts: getAllContactsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
