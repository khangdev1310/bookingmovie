import {
    ADMIN_USERINFOR_REQUEST,
    ADMIN_USERINFOR_SUCCESS,
    ADMIN_USERINFOR_FAILURE,
    UPDATE_USERINFOR_REQUEST,
    UPDATE_USERINFOR_SUCCESS,
    UPDATE_USERINFOR_FAILURE,
    DELETE_USERINFOR_REQUEST,
    DELETE_USERINFOR_SUCCESS,
    DELETE_USERINFOR_FAILURE,
    ADD_USERINFOR_REQUEST,
    ADD_USERINFOR_SUCCESS,
    ADD_USERINFOR_FAILURE,
    ADMIN_FILM_REQUEST,
    ADMIN_FILM_SUCCESS,
    ADMIN_FILM_FAILURE,
    ADD_FILM_REQUEST,
    ADD_FILM_SUCCESS,
    ADD_FILM_FAILURE,
    UPDATE_FILM_REQUEST,
    UPDATE_FILM_SUCCESS,
    UPDATE_FILM_FAILURE,
    DELETE_FILM_REQUEST,
    DELETE_FILM_SUCCESS,
    DELETE_FILM_FAILURE
  } from "../constan/admin";
  
  const initialState = {
    userAccount: [],
    isLoading: false,
    error: null,
    updateUserAccount: [],
  };

  const initialFilmState = {
    FilmInfor: [],
    isLoading: false,
    error: null,
    updateFilmInfor: [],
  };
  
  export function adminReducer(state = initialState, action) {
    switch (action.type) {
      case ADMIN_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case ADMIN_USERINFOR_SUCCESS:
        return { ...state, isLoading: false, userAccount: action.payload.data };
      case ADMIN_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case UPDATE_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case UPDATE_USERINFOR_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateUserAccount: action.payload.data,
        };
      case UPDATE_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case DELETE_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case DELETE_USERINFOR_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateUserAccount: action.payload.data,
        };
      case DELETE_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case ADD_USERINFOR_REQUEST:
        return { ...state, isLoading: true, error: null };
      case ADD_USERINFOR_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateUserAccount: action.payload.data,
        };
      case ADD_USERINFOR_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }
  export function adminFilmReducer(state = initialFilmState, action) {
    switch (action.type) {
      case ADMIN_FILM_REQUEST:
        return { ...state, isLoading: true, error: null };
      case ADMIN_FILM_SUCCESS:
        return { ...state, isLoading: false, FilmInfor: action.payload.data };
      case ADMIN_FILM_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case UPDATE_FILM_REQUEST:
        return { ...state, isLoading: true, error: null };
      case UPDATE_FILM_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateFilmInfor: action.payload.data,
        };
      case UPDATE_FILM_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case DELETE_FILM_REQUEST:
        return { ...state, isLoading: true, error: null };
      case DELETE_FILM_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateFilmInfor: action.payload.data,
        };
      case DELETE_FILM_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      case ADD_FILM_REQUEST:
        return { ...state, isLoading: true, error: null };
      case ADD_FILM_SUCCESS:
        return {
          ...state,
          isLoading: false,
          updateFilmInfor: action.payload.data,
        };
      case ADD_FILM_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }