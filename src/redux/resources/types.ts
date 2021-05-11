import { Action } from "redux";

export interface ResourceResponseObject {
  id: number;
  type: string;
  contactName: string;
  mobileNumber: string;
  resourceName: string;
  address: string;
  taluka: string;
  note: string;
  createdAt: number;
}
export interface ResourceState {
  message: string;
  isRequestedResourcesLoading: boolean;
  isSuppliedResourcesLoading: boolean;
  requestedResourcesTotal: number;
  suppliedResourcesTotal: number;
  pages: number;
  requestedResources: ResourceResponseObject[];
  suppliedResources: ResourceResponseObject[];
}

export interface ResourceRequest {
  page: number;
  limit: number;
  type: string;
  resource: string;
  talukaId: string;
}

export interface ResourcesSuccessResponse {
  total: number;
  pages: number;
  resources: ResourceResponseObject[];
}

export enum ResourcesActionTypes {
  GET_REQUESTED_RESOURCES_REQUEST = "GET_REQUESTED_RESOURCES_REQUEST",
  GET_REQUESTED_RESOURCES_SUCCESS = "GET_REQUESTED_RESOURCES_SUCCESS",
  GET_REQUESTED_RESOURCES_FAIL = "GET_REQUESTED_RESOURCES_FAIL",
  GET_SUPPLIED_RESOURCES_REQUEST = "GET_SUPPLIED_RESOURCES_REQUEST",
  GET_SUPPLIED_RESOURCES_SUCCESS = "GET_SUPPLIED_RESOURCES_SUCCESS",
  GET_SUPPLIED_RESOURCES_FAIL = "GET_SUPPLIED_RESOURCES_FAIL",
}

export interface GetRequestedResourcesRequestAction extends Action {
  payload: ResourceRequest;
  type: typeof ResourcesActionTypes.GET_REQUESTED_RESOURCES_REQUEST;
}

export interface GetRequestedResourcesSuccessAction extends Action {
  payload: ResourcesSuccessResponse;
  type: typeof ResourcesActionTypes.GET_REQUESTED_RESOURCES_SUCCESS;
}

export interface GetRequestedResourcesFailAction extends Action {
  payload: string;
  type: typeof ResourcesActionTypes.GET_REQUESTED_RESOURCES_FAIL;
}

export interface GetSuppliedResourcesRequestAction extends Action {
  payload: ResourceRequest;
  type: typeof ResourcesActionTypes.GET_SUPPLIED_RESOURCES_REQUEST;
}

export interface GetSuppliedResourcesSuccessAction extends Action {
  payload: ResourcesSuccessResponse;
  type: typeof ResourcesActionTypes.GET_SUPPLIED_RESOURCES_SUCCESS;
}

export interface GetSuppliedResourcesFailAction extends Action {
  payload: string;
  type: typeof ResourcesActionTypes.GET_SUPPLIED_RESOURCES_FAIL;
}

export type ResourcesActions =
  | GetRequestedResourcesRequestAction
  | GetRequestedResourcesSuccessAction
  | GetRequestedResourcesFailAction
  | GetSuppliedResourcesRequestAction
  | GetSuppliedResourcesSuccessAction
  | GetSuppliedResourcesFailAction;
