import { combineReducers } from "redux"
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    userProfile: userReducer
});

export default rootReducer