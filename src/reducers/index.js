import {combineReducers} from "redux";

import linkReducer from "./linkReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    linkReducer,
    userReducer,
});

export default rootReducer;