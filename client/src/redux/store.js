import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/alertReducer";
import { notificationReducer } from "./reducers/notificationReducer";

import { getAllContactsReducer, userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  alert: loadingReducer,
  contacts: getAllContactsReducer,
  notify: notificationReducer,
  userDetail: userReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
