import { Action } from "redux";

export interface RequestResourceState {
  errorMessage: string;
  isLoading: boolean;
  showSuccessMessage:boolean;
  requestRegistered:boolean;
}

export interface RequestResourceRequest {
  contactName: string;
  mobileNumber: string;
  note: string;
  talukaId: number;
  address: string;
  resourceName:string;
}

export enum ResourcesActionTypes {
  REQUEST_RESOURCES_REQUEST = "REQUEST_RESOURCES_REQUEST",
  REQUEST_RESOURCES_SUCCESS = "REQUEST_RESOURCES_SUCCESS",
  REQUEST_RESOURCES_FAIL = "REQUEST_RESOURCES_FAIL",
  SHOW_SUCCESS_MESSAGE = "SHOW_SUCCESS_MESSAGE",
  HIDE_SUCCESS_MESSAGE = "HIDE_SUCCESS_MESSAGE",
}

export interface RequestResourceRequestAction extends Action {
  payload: RequestResourceRequest;
  type: typeof ResourcesActionTypes.REQUEST_RESOURCES_REQUEST;
}

export interface RequestResourceSuccessAction extends Action {
  type: typeof ResourcesActionTypes.REQUEST_RESOURCES_SUCCESS;
}

export interface RequestResourceFailAction extends Action {
  payload: string;
  type: typeof ResourcesActionTypes.REQUEST_RESOURCES_FAIL;
}
export interface ShowSuccessMessageAction extends Action {
  type: typeof ResourcesActionTypes.SHOW_SUCCESS_MESSAGE;
}
export interface HideSuccessMessageAction extends Action {
  type: typeof ResourcesActionTypes.HIDE_SUCCESS_MESSAGE;
}

export type ResourcesActions =
  | RequestResourceRequestAction
  | RequestResourceSuccessAction
  | RequestResourceFailAction
  | ShowSuccessMessageAction
  | HideSuccessMessageAction;
