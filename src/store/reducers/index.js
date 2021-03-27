import { combineReducers } from 'redux';
import loginReducer from './login_reducer'

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;