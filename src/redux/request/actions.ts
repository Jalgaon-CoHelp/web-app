import {
  RequestResourceFailAction,
  RequestResourceRequest,
  RequestResourceRequestAction,
  RequestResourceSuccessAction,
  ResourcesActionTypes,
  HideMessageAction,
  ShowMessage,
  ShowMessageAction,
} from "./types";

export const requestResourceRequestAction = (
  requestData: RequestResourceRequest
): RequestResourceRequestAction => ({
  type: ResourcesActionTypes.REQUEST_RESOURCES_REQUEST,
  payload: requestData,
});

export const requestResourceSuccessAction = (): RequestResourceSuccessAction => ({
  type: ResourcesActionTypes.REQUEST_RESOURCES_SUCCESS,
});

export const requestResourceFailAction = (
  error: string
): RequestResourceFailAction => ({
  type: ResourcesActionTypes.REQUEST_RESOURCES_FAIL,
  payload: error,
});

export const hideMessageAction = (): HideMessageAction => ({
  type: ResourcesActionTypes.HIDE_MESSAGE,
});

export const showMessageAction = (
  messageDetails: ShowMessage
): ShowMessageAction => ({
  type: ResourcesActionTypes.SHOW_MESSAGE,
  payload: messageDetails,
});
