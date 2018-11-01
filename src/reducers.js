import {combineReducers} from 'redux';
import counter from './counter/reducer.js';
import login from './login/reducer.js';

export default combineReducers({
  counter,
  login,
});
