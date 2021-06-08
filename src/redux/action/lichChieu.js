import {
    THONG_TIN_LICH_CHIEU_PHIM_REQUESTS,
    THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
    THONG_TIN_LICH_CHIEU_PHIM_FAILURE,
  } from "../constan/lichChieu";
import thongtinlichphimAPI from '../../services/lichchieuAPI'
  
  
  export function thongtinlichchieuPhim(maPhim) {
    return async (dispatch) => {
      dispatch({ type: THONG_TIN_LICH_CHIEU_PHIM_REQUESTS });
  
      try {
        const { data } = await thongtinlichphimAPI.thongtinlichchieuPhim(maPhim);
  
        dispatch({ type: THONG_TIN_LICH_CHIEU_PHIM_SUCCESS, payload: { data } });
      } catch (error) {
        dispatch({
          type: THONG_TIN_LICH_CHIEU_PHIM_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  