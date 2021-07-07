import {
    GET_HETHONGRAP_REQUEST,
    GET_HETHONGRAP_SUCCESS,
    GET_HETHONGRAP_FAILURE,
    GET_LICHCHIEUHTRAP_REQUEST,
    GET_LICHCHIEUHTRAP_SUCCESS,
    GET_LICHCHIEUHTRAP_FAILURE,
    GET_CUMRAPHTRAP_REQUEST,
    GET_CUMRAPHTRAP_SUCCESS,
    GET_CUMRAPHTRAP_FAILURE,
    GET_LTCHIEUHTRAP_REQUEST,
    GET_LTCHIEUHTRAP_SUCCESS,
    GET_LTCHIEUHTRAP_FAILURE,
  } from "../constan/quanlyrapContans";
import quanlyrapAPI from '../../services/quanlyrapAPI';


// Lay thong tin he thong tap
export function gethethongRap() {
    return async (dispatch) => {
      dispatch({ type: GET_HETHONGRAP_REQUEST });
  
      try {
        const { data } = await quanlyrapAPI.hethongRap();
        
        dispatch({ type: GET_HETHONGRAP_SUCCESS, payload: { data } });
        
      } catch (error) {
        dispatch({
          type: GET_HETHONGRAP_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

// Lay thong tin lich chieu he thong rap
export function getlichchieuhethongRap (category) {
	return async (dispatch) => {
		dispatch({ type: GET_LICHCHIEUHTRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.lichchieuhethongRap(category);
			dispatch({ type: GET_LICHCHIEUHTRAP_SUCCESS, payload: {data} });
			
		} catch (error) {
			dispatch({
				type: GET_LICHCHIEUHTRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};

// Lay thong tin cum rap theo he thong rap
export function getcumraptheohethongRap (maHeThongRap) {
	return async (dispatch) => {
		dispatch({ type: GET_CUMRAPHTRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.cumraptheohethongRap(maHeThongRap);
			dispatch({ type: GET_CUMRAPHTRAP_SUCCESS, payload: {data} });
            
		} catch (error) {
			dispatch({
				type: GET_CUMRAPHTRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};

// Lay thong tin cum rap theo he thong rap
export function getlichchieuphimtheohethongRap (maPhim) {
	return async (dispatch) => {
		dispatch({ type: GET_LTCHIEUHTRAP_REQUEST });
		try {
			const { data } = await quanlyrapAPI.lichchieuphimtheohethongRap(maPhim);
			dispatch({ type: GET_LTCHIEUHTRAP_SUCCESS, payload: {data} });
            
		} catch (error) {
			dispatch({
				type: GET_LTCHIEUHTRAP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};