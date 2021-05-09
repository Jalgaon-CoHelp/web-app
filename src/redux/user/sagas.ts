import axios from "axios";
import { UrlConstant } from "../../constants/url";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  UserActionTypes,
  UserLoginRequestAction,
  UserRegisterRequest,
  UserRegisterRequestAction,
} from "./types";
import { SagaIterator } from "redux-saga";
import {
  showSuccessMessageAction,
  userLoginFailAction,
  userLoginSuccessAction,
  userLogoutSuccessAction,
  userRegisterFailAction,
  userRegisterSuccessAction,
} from "./actions.";

const userRegisterService = async ({
  name,
  email,
  mobile,
  talukaId,
}: UserRegisterRequest) => {
  return axios.request({
    method: "POST",
    url: `http://localhost:8000/api/users/volunteers/new`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      name,
      email,
      mobile,
      talukaId,
    },
  });
};
function* userRegister({ payload }: UserRegisterRequestAction): SagaIterator {
  try {
    const response = yield call(userRegisterService, payload);
    if (response && response.data) {
      yield put(userRegisterSuccessAction());
      yield put(showSuccessMessageAction());
    }
  } catch (error) {
    yield put(
      userRegisterFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

const userLoginService = async (email: string, password: string) => {
  return axios.request({
    method: "POST",
    url: `http://localhost:8000/api/users/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  });
};
function* userLogin({
  payload: { callBack, email, password },
}: UserLoginRequestAction): SagaIterator {
  try {
    const response = yield call(userLoginService, email, password);
    if (response && response.data) {
      yield put(userLoginSuccessAction(response.data));
      callBack();
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
    }
  } catch (error) {
    yield put(
      userLoginFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

function* userLogout(): SagaIterator {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    console.log("Logout from saga");
    yield put(userLogoutSuccessAction());
  } catch (error) {
    console.log(error);
  }
}
export function* watchUser(): Generator {
  yield all([
    yield takeLatest(UserActionTypes.USER_REGISTER_REQUEST, userRegister),
    yield takeLatest(UserActionTypes.USER_LOGIN_REQUEST, userLogin),
    yield takeLatest(UserActionTypes.USER_LOGOUT_REQUEST, userLogout),
  ]);
}
