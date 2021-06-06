// Courses reducer
import {
    THONG_TIN_LICH_CHIEU_PHIM_REQUESTS,
    THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
    THONG_TIN_LICH_CHIEU_PHIM_FAILURE,
  } from "../constanReducers/lichPhim";
  
  const initialState = {
    courses: [],
    isLoading: false,
    error: null,
  };
  
  function thongtinlichchieuPhim(state = initialState, action) {
    switch (action.type) {
      case THONG_TIN_LICH_CHIEU_PHIM_REQUESTS: {
        return { ...state, isLoading: true, error: null };
      }
      case THONG_TIN_LICH_CHIEU_PHIM_SUCCESS: {
        return { ...state, courses: action.payload.data, isLoading: false };
      }
      case THONG_TIN_LICH_CHIEU_PHIM_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default thongtinlichchieuPhim;
  