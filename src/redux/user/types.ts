import { Action } from "redux";

export interface UserLoginSuccessResponse {
  token: string;
  userInfo: {
    email: string;
    phone: string;
    role: string;
    name:string;
  };
}

export interface UserState {
  errorMessage: string;
  isLoading: boolean;
  showSuccessMessage: boolean;
  token: string;
  userInfo: {
    email: string;
    phone: string;
    role: string;
    name:string;
  };
  isAuthenticated:boolean;
}

export interface UserRegisterRequest {
  name: string;
  email: string;
  mobile: string;
  talukaId: number;
}

export interface UserLoginRequest {
  email: string;
  password: string;
  callBack:Function;
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
  SHOW_SUCCESS_MESSAGE = "SHOW_SUCCESS_MESSAGE",
  HIDE_SUCCESS_MESSAGE = "HIDE_SUCCESS_MESSAGE",
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

export interface ShowSuccessMessageAction extends Action {
  type: typeof UserActionTypes.SHOW_SUCCESS_MESSAGE;
}
export interface HideSuccessMessageAction extends Action {
  type: typeof UserActionTypes.HIDE_SUCCESS_MESSAGE;
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
  | ShowSuccessMessageAction
  | HideSuccessMessageAction;
