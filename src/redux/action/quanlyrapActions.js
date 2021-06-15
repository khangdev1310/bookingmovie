import {
    GET_QUANLYRAP_REQUEST,
    GET_QUANLYRAP_SUCCESS,
    GET_QUANLYRAP_FAILURE,
  } from "../constan/quanlyrapContans";
import quanlyrapAPI from '../../services/quanlyrapAPI';


// Lay thong tin he thong tap
export function gethethongRap() {
    return async (dispatch) => {
      dispatch({ type: GET_QUANLYRAP_REQUEST });
  
      try {
        const { data } = await quanlyrapAPI.hethongRap();
        
        dispatch({ type: GET_QUANLYRAP_SUCCESS, payload: { data } });
        console.log(data);
      } catch (error) {
        dispatch({
          type: GET_QUANLYRAP_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

// Lay thong tin lich chieu he thong rap
export function getlichchieuhethongRap (category) {
	return async (dispatch) => {
		dispatch({ type: GET_QUANLYRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.lichchieuhethongRap(category);
			dispatch({ type: GET_QUANLYRAP_SUCCESS, payload: {data} });
		} catch (error) {
			dispatch({
				type: GET_QUANLYRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};

// Lay thong tin cum rap theo he thong rap
export function getcumraptheohethongRap (category1) {
	return async (dispatch) => {
		dispatch({ type: GET_QUANLYRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.cumraptheohethongRap(category1);
			dispatch({ type: GET_QUANLYRAP_SUCCESS, payload: {data} });
            console.log(data);
		} catch (error) {
			dispatch({
				type: GET_QUANLYRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};

// Lay thong tin cum rap theo he thong rap
export function getlichchieuPhim (category2) {
	return async (dispatch) => {
		dispatch({ type: GET_QUANLYRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.lichchieuPhim(category2);
			dispatch({ type: GET_QUANLYRAP_SUCCESS, payload: {data} });
		} catch (error) {
			dispatch({
				type: GET_QUANLYRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};