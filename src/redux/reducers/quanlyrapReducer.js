import {
    GET_QUANLYRAP_REQUEST,
    GET_QUANLYRAP_SUCCESS,
    GET_QUANLYRAP_FAILURE,
  } from "../constan/quanlyrapContans";
  
  const initialState = {
    theater: [],
    maHeThongRap:"BHDStar",
    cumRap: [],
    thongTinCumRap:null,
    movieDetail:null,
    searchMovieFind:null,
    movieDetailLichChieu:null,
    isLoading: false,
    error: null,
  };
//   
  export  function hethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_QUANLYRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_QUANLYRAP_SUCCESS: {
        return { ...state, theater: action.payload.data, isLoading: false };
      }
      case GET_QUANLYRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
 
  export  function lichchieuhethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_QUANLYRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_QUANLYRAP_SUCCESS: {
        return { ...state, maHeThongRap: action.payload.data, isLoading: false };
      }
      case GET_QUANLYRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  export  function cumraptheohethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_QUANLYRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_QUANLYRAP_SUCCESS: {
        return { ...state, cumRap: action.payload.data, isLoading: false };
      }
      case GET_QUANLYRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export  function lichchieuphimhethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_QUANLYRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_QUANLYRAP_SUCCESS: {
        return { ...state, movieDetail: action.payload.data, isLoading: false };
      }
      case GET_QUANLYRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  