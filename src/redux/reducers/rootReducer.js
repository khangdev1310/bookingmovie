import { combineReducers } from "redux";
import { signReducer, signupReducer } from "./userSignReducer";


const rootReducer = combineReducers({
  userSign: signReducer,
  signUp: signupReducer,
  
});

export default rootReducer;
