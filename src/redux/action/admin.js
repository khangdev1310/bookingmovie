import {
  ADMIN_USERINFOR_REQUEST,
  ADMIN_USERINFOR_SUCCESS,
  ADMIN_USERINFOR_FAILURE,
  UPDATE_USERINFOR_REQUEST,
  UPDATE_USERINFOR_SUCCESS,
  UPDATE_USERINFOR_FAILURE,
  DELETE_USERINFOR_REQUEST,
  DELETE_USERINFOR_SUCCESS,
  DELETE_USERINFOR_FAILURE,
  ADD_USERINFOR_REQUEST,
  ADD_USERINFOR_SUCCESS,
  ADD_USERINFOR_FAILURE,
  ADMIN_FILM_REQUEST,
  ADMIN_FILM_SUCCESS,
  ADMIN_FILM_FAILURE,
  ADD_FILM_REQUEST,
  ADD_FILM_SUCCESS,
  ADD_FILM_FAILURE,
  UPDATE_FILM_REQUEST,
  UPDATE_FILM_SUCCESS,
  UPDATE_FILM_FAILURE,
  DELETE_FILM_REQUEST,
  DELETE_FILM_SUCCESS,
  DELETE_FILM_FAILURE
} from "../constan/admin"
  
  import adminAPI from "../../services/admin";
  import Swal from "sweetalert2";
  const handleNoti = (icon, title, text) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
    });
  };
  
  export function getUserAccountByPage(pages) {
    return async (dispatch) => {
      dispatch({ type: ADMIN_USERINFOR_REQUEST });
      try {
        const { data } = await adminAPI.getUser(pages);
        return dispatch({ type: ADMIN_USERINFOR_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        return dispatch({
          type: ADMIN_USERINFOR_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  
  export function updateUserAccount(values) {
    return async (dispatch) => {
      dispatch({ type: UPDATE_USERINFOR_REQUEST });
      try {
        const { data } = await adminAPI.updateUser(values);
        handleNoti("success", "Update thành công","" );
        return dispatch({ type: UPDATE_USERINFOR_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        handleNoti("error", "Update thất bại","" );
        return dispatch({
          type: UPDATE_USERINFOR_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  export function deleteUserAccount(id) {
    return async (dispatch) => {
      dispatch({ type: DELETE_USERINFOR_REQUEST });
      try {
        const { data } = await adminAPI.deleteUser(id);
        return dispatch({ type: DELETE_USERINFOR_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        return dispatch({
          type: DELETE_USERINFOR_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  
  export function addUserAccount(values) {
    return async (dispatch) => {
      dispatch({ type: ADD_USERINFOR_REQUEST });
      try {
        const { data } = await adminAPI.addUser(values);
        handleNoti("success", "Thêm user thành công","" );
        return dispatch({ type: ADD_USERINFOR_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        handleNoti("success", "Thêm user thất bại","" );
        return dispatch({
          type: ADD_USERINFOR_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  
  // Phần Quản lý Phim
  export function getFilmByPage(page) {
    return async (dispatch) => {
      dispatch({ type: ADMIN_FILM_REQUEST });
      try {
        const { data } = await adminAPI.getFilm(page);
        return dispatch({ type: ADMIN_FILM_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        return dispatch({
          type: ADMIN_FILM_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

  export function updateFilm(values) {
    return async (dispatch) => {
      dispatch({ type: UPDATE_FILM_REQUEST });
      try {
        const { data } = await adminAPI.updateFilm(values);
        handleNoti("success", "Update thành công","" );
        return dispatch({ type: UPDATE_FILM_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        handleNoti("error", "Update thất bại","" );
        return dispatch({
          type: UPDATE_FILM_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

  export function deleteFilm(id) {
    return async (dispatch) => {
      dispatch({ type: DELETE_FILM_REQUEST });
      try {
        const { data } = await adminAPI.deleteFilm(id);
        handleNoti("success", "Xóa phim thành công","" );
        return dispatch({ type: DELETE_FILM_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        handleNoti("error", "Xóa phim không thành công","" );
        return dispatch({
          type: DELETE_FILM_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

  export function addFilm(values) {
    return async (dispatch) => {
      dispatch({ type: ADD_FILM_REQUEST });
      try {
        const { data } = await adminAPI.addFilm(values);
        handleNoti("success", "Thêm phim thành công","" );
        return dispatch({ type: ADD_FILM_SUCCESS, payload: { data } });
      } catch (error) {
        // Báo lỗi
        handleNoti("error", "Thêm phim thất bại","" );
        return dispatch({
          type: ADD_FILM_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }