import {
  ResourcesActionTypes,
  GetRequestedResourcesRequestAction,
  GetRequestedResourcesSuccessAction,
  GetRequestedResourcesFailAction,
  ResourcesSuccessResponse,
  ResourceRequest,
  GetSuppliedResourcesRequestAction,
  GetSuppliedResourcesSuccessAction,
  GetSuppliedResourcesFailAction,
} from "./types";

export const getRequestedResourcesRequestAction = (
  requestData: ResourceRequest
): GetRequestedResourcesRequestAction => ({
  type: ResourcesActionTypes.GET_REQUESTED_RESOURCES_REQUEST,
  payload: requestData,
});

export const getRequestedResourcesSuccessAction = (
  requestedResources: ResourcesSuccessResponse
): GetRequestedResourcesSuccessAction => ({
  type: ResourcesActionTypes.GET_REQUESTED_RESOURCES_SUCCESS,
  payload: requestedResources,
});

export const getRequestedResourcesFailAction = (
  error: string
): GetRequestedResourcesFailAction => ({
  type: ResourcesActionTypes.GET_REQUESTED_RESOURCES_FAIL,
  payload: error,
});

export const getSuppliedResourcesRequestAction = (
  supplyData: ResourceRequest
): GetSuppliedResourcesRequestAction => ({
  type: ResourcesActionTypes.GET_SUPPLIED_RESOURCES_REQUEST,
  payload: supplyData,
});

export const getSuppliedResourcesSuccessAction = (
  suppliedResources: ResourcesSuccessResponse
): GetSuppliedResourcesSuccessAction => ({
  type: ResourcesActionTypes.GET_SUPPLIED_RESOURCES_SUCCESS,
  payload: suppliedResources,
});

export const getSuppliedResourcesFailAction = (
  error: string
): GetSuppliedResourcesFailAction => ({
  type: ResourcesActionTypes.GET_SUPPLIED_RESOURCES_FAIL,
  payload: error,
});
