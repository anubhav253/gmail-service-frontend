import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  login: null
}

const loginReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ACTION_TYPES.LOGIN_CALL_SUCCESS:
      return {
        ...state,
        login: action.login
      }
    case ACTION_TYPES.LOGIN_CALL_FAILURE:
      return {
        ...state,
        login: null
      };

    default:
      return state;
  }
}

export default loginReducer;