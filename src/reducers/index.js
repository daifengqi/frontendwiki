import {combineReducers} from "redux";

import linkReducer from "./linkReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    linkReducer,
    userReducer,
    commentReducer
});

export default rootReducer;