import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";
import resourceReducer from "./supplier/reducer";
import hospitalReducer from "./hospital/reducer";
import requestResourcesReducer from "./request/reducer";
import resourcesRequestedRequiredReducer from "./resources/reducer";
import { rootSaga } from "./sagas";
import talukaReducer from "./taluka/reducer";
import userReducer from "./user/reducer";

const tokenFromLocalStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token") as string)
  : null;
const userInfoFromLocalStorage: {
  phone: string;
  email: string;
  role: string;
  name:string;
} = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;

export const initialState = {
  user: {
    isAuthenticated: tokenFromLocalStorage ? true : false,
    userInfo: userInfoFromLocalStorage,
    token: tokenFromLocalStorage,
  },
};
const sagaMiddleware = reduxSaga();
const rootReducer = combineReducers({
  hospital: hospitalReducer,
  taluka: talukaReducer,
  resource: resourceReducer,
  request: requestResourcesReducer,
  resourcesRequestedRequired: resourcesRequestedRequiredReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  {
    user: {
      errorMessage: "",
      isLoading: false,
      userInfo: {
        email: userInfoFromLocalStorage ? userInfoFromLocalStorage.email : "",
        phone: userInfoFromLocalStorage ? userInfoFromLocalStorage.phone : "",
        role: userInfoFromLocalStorage ? userInfoFromLocalStorage.role : "",
        name: userInfoFromLocalStorage ? userInfoFromLocalStorage.name : ""
      },
      variant:"",
      token: tokenFromLocalStorage,
      isAuthenticated: tokenFromLocalStorage ? true : false,
    },
  },
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
