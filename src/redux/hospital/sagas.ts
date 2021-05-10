import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getHospitalsFailAction,
  getHospitalsSuccessAction,
  updateHospitalBedsFailAction,
  updateHospitalBedsSuccessAction,
} from "./actions";
import {
  HospitalActionTypes,
  GetHospitalsRequest,
  GetHospitalsRequestAction,
  UpdateHospitalBedsRequestAction,
} from "./types";
import { SagaIterator } from "redux-saga";

const getHospitalsService = async ({
  page,
  limit,
  bedType,
  talukaId,
}: GetHospitalsRequest) => {
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/hospitals?page=${page}&limit=${limit}&bedType=${bedType}&talukaId=${talukaId}`,
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

const updateHospitalBedsService = async (
  id: number,
  general: number,
  oxygen: number,
  icu: number,
  ventilator: number
) => {
  const token = JSON.parse(localStorage.getItem("token") as string);
  return axios.request({
    method: "PUT",
    url: `${
      process.env.REACT_APP_API_BASE_URL
    }/api/hospitals/${id.toString()}/beds`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      general,
      oxygen,
      icu,
      ventilator,
    },
  });
};
function* updateHospitalBeds({
  payload: {
    id,
    general,
    oxygen,
    icu,
    ventilator,
    closeModal,
    showSuccessMessage,
  },
}: UpdateHospitalBedsRequestAction): SagaIterator {
  try {
    const response = yield call(
      updateHospitalBedsService,
      id,
      general,
      oxygen,
      icu,
      ventilator
    );
    if (response && response.data) {
      yield put(updateHospitalBedsSuccessAction());
      closeModal();
      showSuccessMessage()
    }
  } catch (error) {
    yield put(
      updateHospitalBedsFailAction(
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
    yield takeLatest(
      HospitalActionTypes.UPDATE_HOSPITAL_BEDS_REQUEST,
      updateHospitalBeds
    ),
  ]);
}
