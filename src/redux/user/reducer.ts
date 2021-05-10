import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { UserActions, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  errorMessage: "",
  isLoading: false,
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
        break;
      case UserActionTypes.USER_REGISTER_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
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
        break;
      case UserActionTypes.USER_LOGIN_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
        break;
      case UserActionTypes.USER_LOGOUT_SUCCESS:
        draftState.isAuthenticated = false;
        draftState.userInfo.name = "";
        draftState.token = "";
        draftState.userInfo.email = "";
        draftState.userInfo.phone = "";
        draftState.userInfo.role = "";
        break;
      case UserActionTypes.SHOW_MESSAGE:
        draftState.errorMessage = action.payload.message;
        draftState.variant = action.payload.variant;
        break;
      case UserActionTypes.HIDE_MESSAGE:
        draftState.errorMessage = "";
        break;
    }
  },
  initialState
);

export default userReducer;
