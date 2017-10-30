import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import _reducers from './reducers';
import thunk from 'redux-thunk';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'; //Add in switch to read env and use either browser or memory history with SSR
const history = createHistory();
const historyMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ..._reducers,
    router: routerReducer
  }), 
  applyMiddleware(
    historyMiddleware,
    thunk
  )
)

const Root = () => (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root') || document.createElement('div'));
registerServiceWorker();
