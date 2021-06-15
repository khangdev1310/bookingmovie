import {
	GET_COURSES_REQUEST,
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
} from "../constan/CoursesContants";
import coursesApi from '../../services/CoursesAPI'
const getCoursesByCategory = (category) => {
	return async (dispatch) => {
		dispatch({ type: GET_COURSES_REQUEST });
		try {
			const { data } = await coursesApi.getCoursesByCategory(category);
			dispatch({ type: GET_COURSES_SUCCESS, payload: {data} });
		} catch (error) {
			dispatch({
				type: GET_COURSES_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};

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
export { getCoursesByCategory };