import {
  AddResourceFailAction,
  AddResourceRequest,
  AddResourceRequestAction,
  AddResourceSuccessAction,
  HideMessageAction,
  ResourcesActionTypes,
  ShowMessage,
  ShowMessageAction,
} from "./types";

export const addResourceRequestAction = (
  requestData: AddResourceRequest
): AddResourceRequestAction => ({
  type: ResourcesActionTypes.ADD_RESOURCES_REQUEST,
  payload: requestData,
});

export const addResourceSuccessAction = (): AddResourceSuccessAction => ({
  type: ResourcesActionTypes.ADD_RESOURCES_SUCCESS,
});

export const addResourceFailAction = (
  error: string
): AddResourceFailAction => ({
  type: ResourcesActionTypes.ADD_RESOURCES_FAIL,
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
