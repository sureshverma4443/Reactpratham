
import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";




export const rootReducer = combineReducers({
    counter:counterReducer,
});