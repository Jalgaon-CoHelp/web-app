import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";
import resourceReducer from "./addSupplier/reducer";
import hospitalReducer from "./hospital/reducer";
import requestResourcesReducer from "./request/reducer";
import resourcesRequestedRequiredReducer from "./resources/reducer";
import { rootSaga } from "./sagas";
import talukaReducer from "./taluka/reducer";

export const initialState = {};
const sagaMiddleware = reduxSaga();
const rootReducer = combineReducers({
  hospital: hospitalReducer,
  taluka: talukaReducer,
  resource: resourceReducer,
  request: requestResourcesReducer,
  resourcesRequestedRequired: resourcesRequestedRequiredReducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
