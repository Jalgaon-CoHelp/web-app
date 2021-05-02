import { Action } from "redux";

export interface Taluka {
  name: string;
  id: number;
}
export interface Beds {
  general?: number;
  oxygen?: number;
  icu?: number;
  ventilator?: number;
}
export interface Hospital {
  id: number;
  name: string;
  address?: string;
  taluka: Taluka;
  contact1?: string;
  contact2?: string;
  beds: Beds;
  createdAt: number;
  updatedAt: number;
}
export interface GetHospitalSuccessResponse {
  total: number;
  pages: number;
  hospitals: Hospital[];
}
export interface HospitalState {
  errorMessage: string;
  isLoading: boolean;
  total: number;
  pages: number;
  hospitals: Hospital[];
}

export interface GetHospitalsRequest {
  limit: number;
  page: number;
}

export enum HospitalActionTypes {
  GET_HOSPITALS_REQUEST = "GET_HOSPITALS_REQUEST",
  GET_HOSPITALS_SUCCESS = "GET_HOSPITALS_SUCCESS",
  GET_HOSPITALS_FAIL = "GET_HOSPITALS_FAIL",
}

export interface GetHospitalsRequestAction extends Action {
  payload: GetHospitalsRequest;
  type: typeof HospitalActionTypes.GET_HOSPITALS_REQUEST;
}

export interface GetHospitalsSuccessAction extends Action {
  payload: GetHospitalSuccessResponse;
  type: typeof HospitalActionTypes.GET_HOSPITALS_SUCCESS;
}

export interface GetHospitalsFailAction extends Action {
  payload: string;
  type: typeof HospitalActionTypes.GET_HOSPITALS_FAIL;
}

export type HospitalActions =
  | GetHospitalsRequestAction
  | GetHospitalsSuccessAction
  | GetHospitalsFailAction;
