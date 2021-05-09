import {
  AddResourceFailAction,
  AddResourceRequest,
  AddResourceRequestAction,
  AddResourceSuccessAction,
  HideSuccessMessageAction,
  ResourcesActionTypes,
  ShowSuccessMessageAction,
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

export const showSuccessMessageAction = (): ShowSuccessMessageAction => ({
  type: ResourcesActionTypes.SHOW_SUCCESS_MESSAGE,
});

export const hideSuccessMessageAction = (): HideSuccessMessageAction => ({
  type: ResourcesActionTypes.HIDE_SUCCESS_MESSAGE,
});
