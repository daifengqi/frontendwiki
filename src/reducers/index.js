import { combineReducers } from "redux";
import linkReducer from "./linkReducer.js";
import userReducer from "./userReducer.js";
import commentReducer from "./commentReducer";
import auth from "./auth.js";

const rootReducer = combineReducers({
  linkReducer,
  userReducer,
  commentReducer,
  auth
});

export default rootReducer;
