import {
	GET_COURSES_REQUEST,
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
	GET_MOVIEDETAIL_REQUEST,
	GET_MOVIEDETAIL_SUCCESS,
	GET_MOVIEDETAIL_FAILURE,
  } from "../constan/CoursesContants";
import coursesApi from '../../services/CoursesAPI'


export function getCourses() {
    return async (dispatch) => {
      dispatch({ type: GET_COURSES_REQUEST });
  
      try {
        const { data } = await coursesApi.MovieList();
        
        dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
        console.log(data);
      } catch (error) {
        dispatch({
          type: GET_COURSES_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
  export function getCoursesDetails  (id){
	return async (dispatch) => {
		dispatch({ type: GET_MOVIEDETAIL_REQUEST });
		try {
			const { data } = await coursesApi.MovieDetail(id);
			dispatch({ type: GET_MOVIEDETAIL_SUCCESS, payload: {data} });
			console.log(data);
		} catch (error) {
			dispatch({
				type: GET_MOVIEDETAIL_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};