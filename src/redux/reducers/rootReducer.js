import { combineReducers } from "redux";
import { signReducer, signupReducer } from "./userSignReducer";
import coursesReducer from '../reducers/CoursesReducer'

const rootReducer = combineReducers({
   signReducer,
   signupReducer,
   coursesReducer,
  
});

export default rootReducer;
