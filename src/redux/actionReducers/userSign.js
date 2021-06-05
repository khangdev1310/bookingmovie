import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constanReducers/userSign";
import usersignAPI from '../../services/usersAPI';

export function signin(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const { data } = await usersignAPI.signin(values);
      // Lưu thông tin user xuống localStorage để giữ trạng thai đăng nhập khi user tắt trang web
      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

