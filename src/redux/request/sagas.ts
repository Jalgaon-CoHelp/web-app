import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  requestResourceFailAction,
  requestResourceSuccessAction,
} from "./actions";
import { ResourcesActionTypes, RequestResourceRequestAction } from "./types";
import { SagaIterator } from "redux-saga";

const requestResourceService = async (
  contactName: string,
  mobileNumber: string,
  note: string,
  address: string,
  resourceName: string,
  talukaId: number
) => {
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
  payload: {
    showSuccessMessage,
    contactName,
    mobileNumber,
    note,
    address,
    resourceName,
    talukaId,
    emptyFormField,
  },
}: RequestResourceRequestAction): SagaIterator {
  try {
    const response = yield call(
      requestResourceService,
      contactName,
      mobileNumber,
      note,
      address,
      resourceName,
      talukaId
    );
    if (response && response.data) {
      yield put(requestResourceSuccessAction());
      showSuccessMessage();
      emptyFormField();
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
