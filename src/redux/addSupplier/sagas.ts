import axios from "axios";
import { UrlConstant } from "../../constants/url";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { addResourceFailAction, addResourceSuccessAction } from "./actions";
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
    url: `http://localhost:8000/api/resources/request`,
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
  console.log(payload);
  try {
    const response = yield call(addResourceService, payload);
    if (response && response.data) {
      yield put(addResourceSuccessAction());
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
