import {
  RequestResourceFailAction,
  RequestResourceRequest,
  RequestResourceRequestAction,
  RequestResourceSuccessAction,
  HideSuccessMessageAction,
  ResourcesActionTypes,
  ShowSuccessMessageAction,
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

export const showSuccessMessageAction = (): ShowSuccessMessageAction => ({
  type: ResourcesActionTypes.SHOW_SUCCESS_MESSAGE,
});

export const hideSuccessMessageAction = (): HideSuccessMessageAction => ({
  type: ResourcesActionTypes.HIDE_SUCCESS_MESSAGE,
});
