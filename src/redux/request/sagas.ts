import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  requestResourceFailAction,
  requestResourceSuccessAction,
  showSuccessMessageAction,
} from "./actions";
import {
  ResourcesActionTypes,
  RequestResourceRequestAction,
  RequestResourceRequest,
} from "./types";
import { SagaIterator } from "redux-saga";

const requestResourceService = async ({
  contactName,
  mobileNumber,
  note,
  address,
  resourceName,
  talukaId,
}: RequestResourceRequest) => {
  return axios.request({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/resources/request`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      contactName,
      mobileNumber,
      note,
      resourceName,
      talukaId,
      address,
    },
  });
};
function* requestResource({
  payload,
}: RequestResourceRequestAction): SagaIterator {
  try {
    const response = yield call(requestResourceService, payload);
    if (response && response.data) {
      yield put(requestResourceSuccessAction());
      yield put(showSuccessMessageAction());
    }
  } catch (error) {
    yield put(
      requestResourceFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
export function* watchRequestResource(): Generator {
  yield all([
    yield takeLatest(
      ResourcesActionTypes.REQUEST_RESOURCES_REQUEST,
      requestResource
    ),
  ]);
}
