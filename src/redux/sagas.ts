import { all, fork } from "redux-saga/effects";
import { watchHospital } from "./hospital/sagas";

export function* rootSaga(): Generator {
  yield all([fork(watchHospital)]);
}
