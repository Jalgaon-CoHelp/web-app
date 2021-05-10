import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  UserActionTypes,
  UserLoginRequestAction,
  UserRegisterRequestAction,
} from "./types";
import { SagaIterator } from "redux-saga";
import {
  userLoginFailAction,
  userLoginSuccessAction,
  userLogoutSuccessAction,
  userRegisterFailAction,
  userRegisterSuccessAction,
} from "./actions.";

const userRegisterService = async (
  name: string,
  email: string,
  mobile: string,
  talukaId: number,
  password: string
) => {
  return axios.request({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/users/volunteers/new`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      name,
      email,
      mobile,
      talukaId,
      password,
    },
  });
};
function* userRegister({
  payload: {
    name,
    email,
    mobile,
    talukaId,
    password,
    callback,
    emptyFormField,
  },
}: UserRegisterRequestAction): SagaIterator {
  try {
    const response = yield call(
      userRegisterService,
      name,
      email,
      mobile,
      talukaId,
      password
    );
    if (response && response.data) {
      yield put(userRegisterSuccessAction());
      callback();
      emptyFormField();
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
    url: `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
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
  payload: { callBack, email, password, emptyFormField },
}: UserLoginRequestAction): SagaIterator {
  try {
    const response = yield call(userLoginService, email, password);
    if (response && response.data) {
      yield put(userLoginSuccessAction(response.data));
      callBack();
      emptyFormField();
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
