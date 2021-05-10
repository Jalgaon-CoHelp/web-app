import { Action } from "redux";

export interface AddResourceState {
  errorMessage: string;
  isLoading: boolean;
  variant: string;
}

export interface AddResourceRequest {
  contactName: string;
  mobileNumber: string;
  note: string;
  talukaId: number;
  address: string;
  resourceName: string;
  showSuccessMessage: Function;
  emptyFormField:Function;
}

export interface ShowMessage {
  message: string;
  variant: string;
}
export enum ResourcesActionTypes {
  ADD_RESOURCES_REQUEST = "ADD_RESOURCES_REQUEST",
  ADD_RESOURCES_SUCCESS = "ADD_RESOURCES_SUCCESS",
  ADD_RESOURCES_FAIL = "ADD_RESOURCES_FAIL",
  SHOW_MESSAGE = "SHOW_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
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
export interface ShowMessageAction extends Action {
  type: typeof ResourcesActionTypes.SHOW_MESSAGE;
  payload: ShowMessage;
}
export interface HideMessageAction extends Action {
  type: typeof ResourcesActionTypes.HIDE_MESSAGE;
}

export type ResourcesActions =
  | AddResourceRequestAction
  | AddResourceSuccessAction
  | AddResourceFailAction
  | ShowMessageAction
  | HideMessageAction;
