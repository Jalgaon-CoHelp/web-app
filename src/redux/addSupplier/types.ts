import { Action } from "redux";

export interface AddResourceState {
  errorMessage: string;
  isLoading: boolean;
  showSuccessMessage: boolean;
  supplierRegistered: boolean;
}

export interface AddResourceRequest {
  contactName: string;
  mobileNumber: string;
  note: string;
  talukaId: number;
  address: string;
  resourceName:string;
}

export enum ResourcesActionTypes {
  ADD_RESOURCES_REQUEST = "ADD_RESOURCES_REQUEST",
  ADD_RESOURCES_SUCCESS = "ADD_RESOURCES_SUCCESS",
  ADD_RESOURCES_FAIL = "ADD_RESOURCES_FAIL",
  SHOW_SUCCESS_MESSAGE = "SHOW_SUCCESS_MESSAGE",
  HIDE_SUCCESS_MESSAGE = "HIDE_SUCCESS_MESSAGE",
}

export interface AddResourceRequestAction extends Action {
  payload: AddResourceRequest;
  type: typeof ResourcesActionTypes.ADD_RESOURCES_REQUEST;
}

export interface AddResourceSuccessAction extends Action {
  type: typeof ResourcesActionTypes.ADD_RESOURCES_SUCCESS;
}

export interface AddResourceFailAction extends Action {
  payload: string;
  type: typeof ResourcesActionTypes.ADD_RESOURCES_FAIL;
}
export interface ShowSuccessMessageAction extends Action {
  type: typeof ResourcesActionTypes.SHOW_SUCCESS_MESSAGE;
}
export interface HideSuccessMessageAction extends Action {
  type: typeof ResourcesActionTypes.HIDE_SUCCESS_MESSAGE;
}

export type ResourcesActions =
  | AddResourceRequestAction
  | AddResourceSuccessAction
  | AddResourceFailAction
  | ShowSuccessMessageAction
  | HideSuccessMessageAction;
