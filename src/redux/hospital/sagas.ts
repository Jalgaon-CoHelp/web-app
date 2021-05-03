import axios from "axios";
import { UrlConstant } from "../../constants/url";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getHospitalsFailAction, getHospitalsSuccessAction } from "./actions";
import {
  HospitalActionTypes,
  GetHospitalsRequest,
  GetHospitalsRequestAction,
} from "./types";
import { SagaIterator } from "redux-saga";

const getHospitalsService = async ({
  page,
  limit,
}: GetHospitalsRequest) => {
  return axios.request({
    method: "GET",
    url: `http://localhost:8080/api/hospitals?page=${page}&limit=${limit}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
function* getHospitals({ payload }: GetHospitalsRequestAction): SagaIterator {
  try {
    const response = yield call(getHospitalsService, payload);
    if (response && response.data) {
      yield put(getHospitalsSuccessAction(response.data));
    }
  } catch (error) {
    yield put(
      getHospitalsFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
export function* watchHospital(): Generator {
  yield all([
    yield takeLatest(HospitalActionTypes.GET_HOSPITALS_REQUEST, getHospitals),
  ]);
}
