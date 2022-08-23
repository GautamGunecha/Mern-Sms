import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/alertReducer";
import { notificationReducer } from "./reducers/notificationReducer";

import {
  createNewContactReducer,
  getAllContactsReducer,
  getUserReducer,
} from "./reducers/userReducer";

const rootReducer = combineReducers({
  alert: loadingReducer,
  newContact: createNewContactReducer,
  contacts: getAllContactsReducer,
  notify: notificationReducer,
  userDetails: getUserReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
