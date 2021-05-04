import axios from "axios";
import { UrlConstant } from "../../constants/url";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  TalukaActionTypes,
} from "./types";
import { SagaIterator } from "redux-saga";
import { getTalukasFailAction, getTalukasSuccessAction } from "./actions.";

const getTalukasService = async () => {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/api/talukas`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
function* getTalukas(): SagaIterator {
  try {
    const response = yield call(getTalukasService);
    if (response && response.data) {
      yield put(getTalukasSuccessAction(response.data));
    }
  } catch (error) {
    yield put(
      getTalukasFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
export function* watchTaluka(): Generator {
  yield all([
    yield takeLatest(TalukaActionTypes.GET_TALUKAS_REQUEST, getTalukas),
  ]);
}
