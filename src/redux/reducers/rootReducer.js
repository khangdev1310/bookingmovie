import { combineReducers } from "redux";
import { signReducer, signupReducer } from "./userSignReducer";
import coursesReducer from "../reducers/CoursesReducer";
import {
  hethongrapReducer,
  lichchieuhethongrapReducer,
  cumraptheohethongrapReducer,
  lichchieuphimhethongrapReducer,
} from "../reducers/quanlyrapReducer";
import { adminReducer,adminFilmReducer } from "../reducers/admin";
const rootReducer = combineReducers({
  signReducer,
  signupReducer,
  coursesReducer,
  hethongrapReducer,
  lichchieuhethongrapReducer,
  cumraptheohethongrapReducer,
  lichchieuphimhethongrapReducer,
  admin: adminReducer,
  adminFilm: adminFilmReducer
});

export default rootReducer;
