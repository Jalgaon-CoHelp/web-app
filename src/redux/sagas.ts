import { all, fork } from "redux-saga/effects";
import { watchResource } from "./addSupplier/sagas";
import { watchHospital } from "./hospital/sagas";
import { watchRequestResource } from "./request/sagas";
import { watchRequestRequiredResource } from "./resources/sagas";
import { watchTaluka } from "./taluka/sagas";
import { watchUser } from "./user/sagas";

export function* rootSaga(): Generator {
  yield all([
    fork(watchHospital),
    fork(watchTaluka),
    fork(watchResource),
    fork(watchRequestResource),
    fork(watchRequestRequiredResource),
    fork(watchUser),
  ]);
}
