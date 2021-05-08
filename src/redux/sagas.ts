import { all, fork } from "redux-saga/effects";
import { watchResource } from "./addSupplier/sagas";
import { watchHospital } from "./hospital/sagas";
import { watchTaluka } from "./taluka/sagas";

export function* rootSaga(): Generator {
  yield all([fork(watchHospital), fork(watchTaluka),fork(watchResource)]);
}
