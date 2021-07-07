import { combineReducers } from "redux";
import { signReducer, signupReducer } from "./userSignReducer";
import {coursesReducer,coursesDetailsReducer} from "../reducers/CoursesReducer";
import {
  hethongrapReducer,
  lichchieuhethongrapReducer,
  cumraptheohethongrapReducer,
  lichchieuphimhethongrapReducer,
} from "../reducers/quanlyrapReducer";
import { adminReducer,adminFilmReducer } from "../reducers/admin";
import {danhsachphongveReducer} from '../reducers/datveReducer';
const rootReducer = combineReducers({
  signReducer,
  signupReducer,
  coursesReducer,
  coursesDetailsReducer,
  hethongrapReducer,
  lichchieuhethongrapReducer,
  cumraptheohethongrapReducer,
  lichchieuphimhethongrapReducer,
  danhsachphongveReducer,
  
  
  admin: adminReducer,
  adminFilm: adminFilmReducer
});

export default rootReducer;
