import {
  GetHospitalsFailAction,
  GetHospitalsRequest,
  GetHospitalsRequestAction,
  GetHospitalsSuccessAction,
  GetHospitalSuccessResponse,
  HideSuccessMessageAction,
  HospitalActionTypes,
  ShowSuccessMessageAction,
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


export const showSuccessMessageAction = (): ShowSuccessMessageAction => ({
  type: HospitalActionTypes.SHOW_SUCCESS_MESSAGE,
});

export const hideSuccessMessageAction = (): HideSuccessMessageAction => ({
  type: HospitalActionTypes.HIDE_SUCCESS_MESSAGE,
});
