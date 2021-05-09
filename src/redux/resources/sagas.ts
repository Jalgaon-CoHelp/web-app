import axios from "axios";
import { UrlConstant } from "../../constants/url";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getRequestedResourcesFailAction,
  getRequestedResourcesSuccessAction,
  getSuppliedResourcesFailAction,
  getSuppliedResourcesSuccessAction,
} from "./actions";
import {
  GetRequestedResourcesRequestAction,
  GetSuppliedResourcesRequestAction,
  ResourceRequest,
  ResourcesActionTypes,
} from "./types";
import { SagaIterator } from "redux-saga";

const getResourcesService = async ({
  page,
  limit,
  type,
  resource,
  talukaId = "",
}: ResourceRequest) => {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/api/resources?page=${page}&limit=${limit}&type=${type}&resource=${resource}&talukaId=${talukaId}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
function* getRequestResource({
  payload,
}: GetRequestedResourcesRequestAction): SagaIterator {
  try {
    const response = yield call(getResourcesService, payload);
    if (response && response.data) {
      yield put(getRequestedResourcesSuccessAction(response.data));
    }
  } catch (error) {
    yield put(
      getRequestedResourcesFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}


function* getSuppliedResource({
  payload,
}: GetSuppliedResourcesRequestAction): SagaIterator {
  try {
    const response = yield call(getResourcesService, payload);
    if (response && response.data) {
      yield put(getSuppliedResourcesSuccessAction(response.data));
    }
  } catch (error) {
    yield put(
      getSuppliedResourcesFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
export function* watchRequestRequiredResource(): Generator {
  yield all([
    yield takeLatest(
      ResourcesActionTypes.GET_REQUESTED_RESOURCES_REQUEST,
      getRequestResource
    ),
    yield takeLatest(
      ResourcesActionTypes.GET_SUPPLIED_RESOURCES_REQUEST,
      getSuppliedResource
    ),
  ]);
}
