import { all, fork } from "redux-saga/effects";
import { watchHospital } from "./hospital/sagas";
import { watchTaluka } from "./taluka/sagas";

export function* rootSaga(): Generator {
  yield all([fork(watchHospital), fork(watchTaluka)]);
}
