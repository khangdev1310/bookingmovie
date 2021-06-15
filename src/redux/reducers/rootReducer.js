import { combineReducers } from "redux";
import { signReducer, signupReducer } from "./userSignReducer";
import coursesReducer from '../reducers/CoursesReducer'
import {hethongrapReducer,lichchieuhethongrapReducer,cumraptheohethongrapReducer,lichchieuphimhethongrapReducer} from '../reducers/quanlyrapReducer'

const rootReducer = combineReducers({
   signReducer,
   signupReducer,
   coursesReducer,
   hethongrapReducer,
   lichchieuhethongrapReducer,
   cumraptheohethongrapReducer,
   lichchieuphimhethongrapReducer,

  
});

export default rootReducer;
