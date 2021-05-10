import { Action } from "redux";

export interface RequestResourceState {
  errorMessage: string;
  isLoading: boolean;
  variant: string;
}

export interface ShowMessage {
  message: string;
  variant: string;
}
export interface RequestResourceRequest {
  contactName: string;
  mobileNumber: string;
  note: string;
  talukaId: number;
  address: string;
  resourceName: string;
  showSuccessMessage: Function;
  emptyFormField: Function;
}

export enum ResourcesActionTypes {
  REQUEST_RESOURCES_REQUEST = "REQUEST_RESOURCES_REQUEST",
  REQUEST_RESOURCES_SUCCESS = "REQUEST_RESOURCES_SUCCESS",
  REQUEST_RESOURCES_FAIL = "REQUEST_RESOURCES_FAIL",
  SHOW_MESSAGE = "SHOW_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
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
export interface ShowMessageAction extends Action {
  type: typeof ResourcesActionTypes.SHOW_MESSAGE;
  payload: ShowMessage;
}
export interface HideMessageAction extends Action {
  type: typeof ResourcesActionTypes.HIDE_MESSAGE;
}

export type ResourcesActions =
  | RequestResourceRequestAction
  | RequestResourceSuccessAction
  | RequestResourceFailAction
  | ShowMessageAction
  | HideMessageAction;
