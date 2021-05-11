import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { ResourceState, ResourcesActions, ResourcesActionTypes } from "./types";

const initialState: ResourceState = {
  message: "",
  isRequestedResourcesLoading: false,
  isSuppliedResourcesLoading: false,
  requestedResourcesTotal: 0,
  suppliedResourcesTotal: 0,
  pages: 0,
  requestedResources: [],
  suppliedResources: [],
};

export const resourcesRequestedRequiredReducer: Reducer<
  ResourceState,
  ResourcesActions
> = produce((draftState: Draft<ResourceState>, action: ResourcesActions) => {
  switch (action.type) {
    case ResourcesActionTypes.GET_REQUESTED_RESOURCES_REQUEST:
      draftState.isRequestedResourcesLoading = true;
      break;
    case ResourcesActionTypes.GET_REQUESTED_RESOURCES_SUCCESS:
      draftState.isRequestedResourcesLoading = false;
      draftState.pages = action.payload.pages;
      draftState.requestedResourcesTotal = action.payload.total;
      draftState.requestedResources = action.payload.resources;
      break;
    case ResourcesActionTypes.GET_REQUESTED_RESOURCES_FAIL:
      draftState.isRequestedResourcesLoading = false;
      draftState.message = action.payload;
      break;
    case ResourcesActionTypes.GET_SUPPLIED_RESOURCES_REQUEST:
      draftState.isSuppliedResourcesLoading = true;
      break;
    case ResourcesActionTypes.GET_SUPPLIED_RESOURCES_SUCCESS:
      draftState.isSuppliedResourcesLoading = false;
      draftState.pages = action.payload.pages;
      draftState.suppliedResourcesTotal = action.payload.total;
      draftState.suppliedResources = action.payload.resources;
      break;
    case ResourcesActionTypes.GET_SUPPLIED_RESOURCES_FAIL:
      draftState.isSuppliedResourcesLoading = false;
      draftState.message = action.payload;
      break;
  }
}, initialState);

export default resourcesRequestedRequiredReducer;
