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
  
  const initialState = {
    theater: [],
    maHeThongRap:"BHDStar",
    cumRap: [],
    thongTinCumRap:null,
    searchMovieFind:null,
    movieDetail:null,
    movieDetailLichChieu:null,
    isLoading: false,
    error: null,
  };
//   
  export  function hethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HETHONGRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_HETHONGRAP_SUCCESS: {
        return { ...state, theater: action.payload.data, isLoading: false };
      }
      case GET_HETHONGRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
 
  export  function lichchieuhethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LICHCHIEUHTRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_LICHCHIEUHTRAP_SUCCESS: {
        return { ...state, cumRap: action.payload.data, isLoading: false };
      }
      case GET_LICHCHIEUHTRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      
      default:
        return state;
    }
  }
  
  export  function cumraptheohethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CUMRAPHTRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_CUMRAPHTRAP_SUCCESS: {
        return { ...state, maHeThongRap: action.payload.data, isLoading: false };
      }
      case GET_CUMRAPHTRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export  function lichchieuphimhethongrapReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LTCHIEUHTRAP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_LTCHIEUHTRAP_SUCCESS: {
        return { ...state, searchMovieFind: action.payload.data, isLoading: false };
      }
      case GET_LTCHIEUHTRAP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  

  
  