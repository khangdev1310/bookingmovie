import {
	GET_DSPHONGVE_REQUEST,
	GET_DSPHONGVE_SUCCESS,
	GET_DSPHONGVE_FAILURE,
	
  } from "../constan/datveContant";
  
  const initialState = {
    dsphongve: [],
    InfoPhongVe:null,
    isLoading: false,
    error: null,
  };
  export function danhsachphongveReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DSPHONGVE_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_DSPHONGVE_SUCCESS: {
        return { ...state, InfoPhongVe: action.payload.data, isLoading: false };
      }
      case GET_DSPHONGVE_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }