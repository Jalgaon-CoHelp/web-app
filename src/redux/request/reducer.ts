import produce, { Draft } from "immer";
import { Reducer } from "redux";
import {
  RequestResourceState,
  ResourcesActions,
  ResourcesActionTypes,
} from "./types";

const initialState: RequestResourceState = {
  errorMessage: "",
  isLoading: false,
  showSuccessMessage: false,
  requestRegistered: false,
};

export const requestResourcesReducer: Reducer<
  RequestResourceState,
  ResourcesActions
> = produce(
  (draftState: Draft<RequestResourceState>, action: ResourcesActions) => {
    switch (action.type) {
      case ResourcesActionTypes.REQUEST_RESOURCES_REQUEST:
        draftState.isLoading = true;
        break;
      case ResourcesActionTypes.REQUEST_RESOURCES_SUCCESS:
        draftState.isLoading = false;
        draftState.requestRegistered = true;
        console.log(draftState.requestRegistered)
        break;
      case ResourcesActionTypes.REQUEST_RESOURCES_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
        break;
      case ResourcesActionTypes.SHOW_SUCCESS_MESSAGE:
        draftState.showSuccessMessage = true;
        break;
      case ResourcesActionTypes.HIDE_SUCCESS_MESSAGE:
        draftState.showSuccessMessage = false;
    }
  },
  initialState
);

export default requestResourcesReducer;
