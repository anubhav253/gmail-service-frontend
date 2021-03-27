import * as ACTION_TYPES from './action_types'

export const successLoginCall = (login) => {
  return {
    type: ACTION_TYPES.LOGIN_CALL_SUCCESS,
    login
  }
}

export const failureLoginCall = () => {
  return {
    type: ACTION_TYPES.LOGIN_CALL_FAILURE
  }
}