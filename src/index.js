import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './App';
import authReducer from './store/reducers/auth';
import teamsReducer from './store/reducers/teams';


const rootReducer = combineReducers({
  auth: authReducer,
  teams: teamsReducer
});

const store = createStore( rootReducer, applyMiddleware(thunk) );

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/nbaclient/">
      <App />
    </BrowserRouter>
  </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
