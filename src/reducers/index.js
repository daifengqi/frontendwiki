import { combineReducers } from "redux";

import linkReducer from "./linkReducer.js";
import userReducer from "./userReducer.js";
import auth from "./auth.js";

const rootReducer = combineReducers({
  linkReducer,
  userReducer,
  auth,
});

export default rootReducer;
