import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { UserActions, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  message: "",
  isLoading: true,
  token: "",
  variant: "",
  userInfo: {
    email: "",
    phone: "",
    role: "",
    name: "",
  },
  isAuthenticated: false,
};

export const userReducer: Reducer<UserState, UserActions> = produce(
  (draftState: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionTypes.USER_REGISTER_REQUEST:
        draftState.isLoading = true;
        break;
      case UserActionTypes.USER_REGISTER_SUCCESS:
        draftState.isLoading = false;
        draftState.variant = "success"
        break;
      case UserActionTypes.USER_REGISTER_FAIL:
        draftState.isLoading = false;
        draftState.message = action.payload;
        draftState.variant = "danger"
        break;
      case UserActionTypes.USER_LOGIN_REQUEST:
        draftState.isLoading = true;
        break;
      case UserActionTypes.USER_LOGIN_SUCCESS:
        draftState.isLoading = false;
        draftState.isAuthenticated = true;
        draftState.token = action.payload.token;
        draftState.userInfo.name = action.payload.userInfo.name;
        draftState.userInfo.email = action.payload.userInfo.email;
        draftState.userInfo.phone = action.payload.userInfo.phone;
        draftState.userInfo.role = action.payload.userInfo.role;
        draftState.variant = "success"
        break;
      case UserActionTypes.USER_LOGIN_FAIL:
        draftState.isLoading = false;
        draftState.message = action.payload;
        draftState.variant = "danger"
        break;
      case UserActionTypes.USER_LOGOUT_SUCCESS:
        draftState.isAuthenticated = false;
        draftState.userInfo.name = "";
        draftState.token = "";
        draftState.userInfo.email = "";
        draftState.userInfo.phone = "";
        draftState.userInfo.role = "";
        draftState.variant = "success"
        break;
      case UserActionTypes.SHOW_MESSAGE:
        draftState.message = action.payload.message;
        draftState.variant = action.payload.variant;
        break;
      case UserActionTypes.HIDE_MESSAGE:
        draftState.message = "";
        break;
    }
  },
  initialState
);

export default userReducer;
