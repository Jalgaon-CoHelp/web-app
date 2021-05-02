import {
  GetHospitalsFailAction,
  GetHospitalsRequest,
  GetHospitalsRequestAction,
  GetHospitalsSuccessAction,
  GetHospitalSuccessResponse,
  HospitalActionTypes,
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
