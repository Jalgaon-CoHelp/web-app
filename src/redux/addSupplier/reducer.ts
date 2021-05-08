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
  }
}, initialState);

export default resourceReducer;
