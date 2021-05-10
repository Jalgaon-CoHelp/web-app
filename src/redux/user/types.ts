import { Action } from "redux";

export interface UserLoginSuccessResponse {
  token: string;
  userInfo: {
    email: string;
    phone: string;
    role: string;
    name: string;
  };
}

export interface UserState {
  errorMessage: string;
  isLoading: boolean;
  variant: string;
  token: string;
  userInfo: {
    email: string;
    phone: string;
    role: string;
    name: string;
  };
  isAuthenticated: boolean;
}

export interface UserRegisterRequest {
  name: string;
  email: string;
  mobile: string;
  talukaId: number;
  password: string;
  callback: Function;
  emptyFormField: Function;
}
export interface ShowMessage {
  message: string;
  variant: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
  callBack: Function;
  emptyFormField: Function;
}
export enum UserActionTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
  USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAIL = "USER_REGISTER_FAIL",
  USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST",
  USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS",
  SHOW_MESSAGE = "SHOW_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
}

export interface UserLoginRequestAction extends Action {
  payload: UserLoginRequest;
  type: typeof UserActionTypes.USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction extends Action {
  payload: UserLoginSuccessResponse;
  type: typeof UserActionTypes.USER_LOGIN_SUCCESS;
}

export interface UserLoginFailAction extends Action {
  payload: string;
  type: typeof UserActionTypes.USER_LOGIN_FAIL;
}

export interface UserRegisterRequestAction extends Action {
  payload: UserRegisterRequest;
  type: typeof UserActionTypes.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction extends Action {
  type: typeof UserActionTypes.USER_REGISTER_SUCCESS;
}

export interface UserRegisterFailAction extends Action {
  payload: string;
  type: typeof UserActionTypes.USER_REGISTER_FAIL;
}

export interface UserLogoutRequestAction extends Action {
  type: typeof UserActionTypes.USER_LOGOUT_REQUEST;
}

export interface UserLogoutSuccessAction extends Action {
  type: typeof UserActionTypes.USER_LOGOUT_SUCCESS;
}
export interface ShowMessageAction extends Action {
  type: typeof UserActionTypes.SHOW_MESSAGE;
  payload: ShowMessage;
}
export interface HideMessageAction extends Action {
  type: typeof UserActionTypes.HIDE_MESSAGE;
}

export type UserActions =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | UserLogoutRequestAction
  | UserLogoutSuccessAction
  | ShowMessageAction
  | HideMessageAction;
