
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constanReducers/signUp";
import usersignAPI from '../../services/usersAPI';
import Swal from "sweetalert2";

const handleNoti = (icon, title, text) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
};
export function signup(values) {
    return async (dispatch) => {
      dispatch({ type: SIGNUP_REQUEST });
  
      try {
        const { data } = await usersignAPI.signup(values);
        // Lưu thông tin user xuống localStorage để giữ trạng thai đăng nhập khi user tắt trang web
        localStorage.setItem("userInfo", JSON.stringify(data));
  
        dispatch({ type: SIGNUP_SUCCESS, payload: { data } });
        handleNoti("success", "Đăng ký thành công","" );
      } catch (error) {
        dispatch({
          type: SIGNUP_FAILURE,
          payload: { error: error.response.data },
        });
        handleNoti("error", "Đăng nhập thất bại","" );
      }
    };
  }