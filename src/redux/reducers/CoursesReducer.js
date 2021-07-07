import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_MOVIEDETAIL_REQUEST,
  GET_MOVIEDETAIL_SUCCESS,
  GET_MOVIEDETAIL_FAILURE,
} from "../constan/CoursesContants";

const initialState = {
  courses1: [],
  movieDetail:null,
  isLoading: false,
  error: null,
};
export function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, courses1: action.payload.data, isLoading: false };
    }
    case GET_COURSES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
export function coursesDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIEDETAIL_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_MOVIEDETAIL_SUCCESS: {
      return { ...state, movieDetail: action.payload.data, isLoading: false };
    }
    case GET_MOVIEDETAIL_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}



