import produce, { Draft } from "immer";
import { Reducer } from "redux";
import {
  RequestResourceState,
  ResourcesActions,
  ResourcesActionTypes,
} from "./types";

const initialState: RequestResourceState = {
  message: "",
  isLoading: false,
  variant:"",
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
        break;
      case ResourcesActionTypes.REQUEST_RESOURCES_FAIL:
        draftState.isLoading = false;
        draftState.message = action.payload;
        break;
      case ResourcesActionTypes.SHOW_MESSAGE:
        draftState.message = action.payload.message;
        draftState.variant = action.payload.variant;
        break;
      case ResourcesActionTypes.HIDE_MESSAGE:
        draftState.message = "";
        break;
    }
  },
  initialState
);

export default requestResourcesReducer;
