import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";
import hospitalReducer from "./hospital/reducer";
import { rootSaga } from "./sagas";

export const initialState = {};
const sagaMiddleware = reduxSaga();
const rootReducer = combineReducers({
  hospital: hospitalReducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
