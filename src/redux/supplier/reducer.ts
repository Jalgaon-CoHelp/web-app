import produce, { Draft } from "immer";
import { Reducer } from "redux";
import {
  AddResourceState,
  ResourcesActions,
  ResourcesActionTypes,
} from "./types";

const initialState: AddResourceState = {
  errorMessage: "",
  isLoading: false,
  variant:""
};

export const resourceReducer: Reducer<
  AddResourceState,
  ResourcesActions
> = produce((draftState: Draft<AddResourceState>, action: ResourcesActions) => {
  switch (action.type) {
    case ResourcesActionTypes.ADD_RESOURCES_REQUEST:
      draftState.isLoading = true;
      break;
    case ResourcesActionTypes.ADD_RESOURCES_SUCCESS:
      draftState.isLoading = false;
      break;
    case ResourcesActionTypes.ADD_RESOURCES_FAIL:
      draftState.isLoading = false;
      draftState.errorMessage = action.payload;
      break;
    case ResourcesActionTypes.SHOW_MESSAGE:
      draftState.errorMessage = action.payload.message;
      draftState.variant = action.payload.variant;
      break;
    case ResourcesActionTypes.HIDE_MESSAGE:
      draftState.errorMessage = "";
      break;
  }
}, initialState);

export default resourceReducer;
