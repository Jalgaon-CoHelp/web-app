import {
  HideMessageAction,
  ShowMessage,
  ShowMessageAction,
  UserActionTypes,
  UserLoginFailAction,
  UserLoginRequest,
  UserLoginRequestAction,
  UserLoginSuccessAction,
  UserLoginSuccessResponse,
  UserLogoutRequestAction,
  UserLogoutSuccessAction,
  UserRegisterFailAction,
  UserRegisterRequest,
  UserRegisterRequestAction,
  UserRegisterSuccessAction,
} from "./types";

export const userRegisterRequestAction = (
  requestData: UserRegisterRequest
): UserRegisterRequestAction => ({
  type: UserActionTypes.USER_REGISTER_REQUEST,
  payload: requestData,
});

export const userRegisterSuccessAction = (): UserRegisterSuccessAction => ({
  type: UserActionTypes.USER_REGISTER_SUCCESS,
});

export const userRegisterFailAction = (
  error: string
): UserRegisterFailAction => ({
  type: UserActionTypes.USER_REGISTER_FAIL,
  payload: error,
});

export const userLoginRequestAction = (
  requestData: UserLoginRequest
): UserLoginRequestAction => ({
  type: UserActionTypes.USER_LOGIN_REQUEST,
  payload: requestData,
});

export const userLoginSuccessAction = (
  response: UserLoginSuccessResponse
): UserLoginSuccessAction => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: response,
});

export const userLoginFailAction = (error: string): UserLoginFailAction => ({
  type: UserActionTypes.USER_LOGIN_FAIL,
  payload: error,
});

export const userLogoutRequestAction = (): UserLogoutRequestAction => ({
  type: UserActionTypes.USER_LOGOUT_REQUEST,
});

export const userLogoutSuccessAction = (): UserLogoutSuccessAction => ({
  type: UserActionTypes.USER_LOGOUT_SUCCESS,
});

export const hideMessageAction = (): HideMessageAction => ({
  type: UserActionTypes.HIDE_MESSAGE,
});

export const showMessageAction = (
  messageDetails: ShowMessage
): ShowMessageAction => ({
  type: UserActionTypes.SHOW_MESSAGE,
  payload: messageDetails,
});
