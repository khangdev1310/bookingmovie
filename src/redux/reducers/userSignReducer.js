import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constan/userSignConstan";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constan/signUpConstan";
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

export function signReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case SIGNUP_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
 
