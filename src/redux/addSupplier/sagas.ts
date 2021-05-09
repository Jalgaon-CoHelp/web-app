import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { addResourceFailAction, addResourceSuccessAction, showSuccessMessageAction } from "./actions";
import {
  ResourcesActionTypes,
  AddResourceRequestAction,
  AddResourceRequest,
} from "./types";
import { SagaIterator } from "redux-saga";

const addResourceService = async ({
  contactName,
  mobileNumber,
  note,
  address,
  resourceName,
  talukaId,
}: AddResourceRequest) => {
  return axios.request({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/api/resources/supply`,
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
function* addResource({ payload }: AddResourceRequestAction): SagaIterator {
  try {
    const response = yield call(addResourceService, payload);
    if (response && response.data) {
      yield put(addResourceSuccessAction());
      yield put(showSuccessMessageAction());
    }
  } catch (error) {
    yield put(
      addResourceFailAction(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
export function* watchResource(): Generator {
  yield all([
    yield takeLatest(ResourcesActionTypes.ADD_RESOURCES_REQUEST, addResource),
  ]);
}
