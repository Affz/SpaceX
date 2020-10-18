import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { mainReducer } from './MainReducer/mainReducer';
import history from './history';
import { Router } from 'react-router-dom';
import './space.css';
import spaceRootSaga from '../src/Saga/spaceRootSaga';
import App from './App/app';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(spaceRootSaga);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);