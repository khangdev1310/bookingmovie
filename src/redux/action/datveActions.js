import {
	GET_DSPHONGVE_REQUEST,
	GET_DSPHONGVE_SUCCESS,
	GET_DSPHONGVE_FAILURE,
	
  } from "../constan/datveContant";
import datveAPI from '../../services/datveAPI'


export function getDSPhongVe(maLichChieu) {
    return async (dispatch) => {
      dispatch({ type: GET_DSPHONGVE_REQUEST });
  
      try {
        const { data } = await datveAPI.danhsachphongVe(maLichChieu);
        
        dispatch({ type: GET_DSPHONGVE_SUCCESS, payload: { data } });
        console.log(data);
      } catch (error) {
        dispatch({
          type: GET_DSPHONGVE_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }