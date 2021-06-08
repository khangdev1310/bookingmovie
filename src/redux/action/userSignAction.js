import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constan/userSignConstan";
import usersignAPI from '../../services/usersAPI';
import Swal from "sweetalert2";

const handleNoti = (icon, title, text) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
};
export function signin(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const { data } = await usersignAPI.signin(values);
      // Lưu thông tin user xuống localStorage để giữ trạng thai đăng nhập khi user tắt trang web
      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
      handleNoti("success", "Đăng nhập thành công","" );
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
      handleNoti("error", "Đăng nhập thất bại","" );
    }
  };
}

