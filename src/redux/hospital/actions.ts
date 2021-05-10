import {
  GetHospitalsFailAction,
  GetHospitalsRequest,
  GetHospitalsRequestAction,
  GetHospitalsSuccessAction,
  GetHospitalSuccessResponse,
  HideMessageAction,
  HospitalActionTypes,
  ShowMessage,
  ShowMessageAction,
  UpdateHospitalBedsFailAction,
  UpdateHospitalBedsRequest,
  UpdateHospitalBedsRequestAction,
  UpdateHospitalBedsSuccessAction,
} from "./types";

export const getHospitalsRequestAction = (
  pageData: GetHospitalsRequest
): GetHospitalsRequestAction => ({
  type: HospitalActionTypes.GET_HOSPITALS_REQUEST,
  payload: pageData,
});

export const getHospitalsSuccessAction = (
  hospitalsData: GetHospitalSuccessResponse
): GetHospitalsSuccessAction => ({
  type: HospitalActionTypes.GET_HOSPITALS_SUCCESS,
  payload: hospitalsData,
});

export const getHospitalsFailAction = (
  error: string
): GetHospitalsFailAction => ({
  type: HospitalActionTypes.GET_HOSPITALS_FAIL,
  payload: error,
});

export const updateHospitalBedsRequestAction = (
  requestData: UpdateHospitalBedsRequest
): UpdateHospitalBedsRequestAction => ({
  type: HospitalActionTypes.UPDATE_HOSPITAL_BEDS_REQUEST,
  payload: requestData,
});

export const updateHospitalBedsSuccessAction = (): UpdateHospitalBedsSuccessAction => ({
  type: HospitalActionTypes.UPDATE_HOSPITAL_BEDS_SUCCESS,
});

export const updateHospitalBedsFailAction = (
  error: string
): UpdateHospitalBedsFailAction => ({
  type: HospitalActionTypes.UPDATE_HOSPITAL_BEDS_FAIL,
  payload: error,
});


export const hideMessageAction = (): HideMessageAction => ({
  type: HospitalActionTypes.HIDE_MESSAGE,
});

export const showMessageAction = (
  messageDetails: ShowMessage
): ShowMessageAction => ({
  type: HospitalActionTypes.SHOW_MESSAGE,
  payload: messageDetails,
});
