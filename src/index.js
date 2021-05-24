import React from 'react';
import ReactDOM from 'react-dom';
import './styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware,createStore,compose} from 'redux';

import {Provider} from 'react-redux'

//Set up redux-thunk và thư viên applyMiddlewware

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const middleware = applyMiddleware(thunk);
const enhancer = compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer,enhancer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
