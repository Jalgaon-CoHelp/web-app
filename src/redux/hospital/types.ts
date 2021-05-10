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

export interface ShowMessage {
  message: string;
  variant: string;
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
  variant: string;
}

export interface GetHospitalsRequest {
  limit: number;
  page: number;
  bedType: string;
  talukaId: string;
}
export interface UpdateHospitalBedsRequest {
  id: number;
  general: number;
  oxygen: number;
  icu: number;
  ventilator: number;
  closeModal: Function;
  showSuccessMessage:Function;
}

export enum HospitalActionTypes {
  GET_HOSPITALS_REQUEST = "GET_HOSPITALS_REQUEST",
  GET_HOSPITALS_SUCCESS = "GET_HOSPITALS_SUCCESS",
  GET_HOSPITALS_FAIL = "GET_HOSPITALS_FAIL",
  UPDATE_HOSPITAL_BEDS_REQUEST = "UPDATE_HOSPITAL_BEDS_REQUEST",
  UPDATE_HOSPITAL_BEDS_SUCCESS = "UPDATE_HOSPITAL_BEDS_SUCCESS",
  UPDATE_HOSPITAL_BEDS_FAIL = "UPDATE_HOSPITAL_BEDS_FAIL",
  SHOW_MESSAGE = "SHOW_MESSAGE",
  HIDE_MESSAGE = "HIDE_MESSAGE",
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

export interface UpdateHospitalBedsRequestAction extends Action {
  payload: UpdateHospitalBedsRequest;
  type: typeof HospitalActionTypes.UPDATE_HOSPITAL_BEDS_REQUEST;
}

export interface UpdateHospitalBedsSuccessAction extends Action {
  type: typeof HospitalActionTypes.UPDATE_HOSPITAL_BEDS_SUCCESS;
}

export interface UpdateHospitalBedsFailAction extends Action {
  payload: string;
  type: typeof HospitalActionTypes.UPDATE_HOSPITAL_BEDS_FAIL;
}

export interface ShowMessageAction extends Action {
  type: typeof HospitalActionTypes.SHOW_MESSAGE;
  payload: ShowMessage;
}
export interface HideMessageAction extends Action {
  type: typeof HospitalActionTypes.HIDE_MESSAGE;
}

export type HospitalActions =
  | GetHospitalsRequestAction
  | GetHospitalsSuccessAction
  | GetHospitalsFailAction
  | UpdateHospitalBedsRequestAction
  | UpdateHospitalBedsSuccessAction
  | UpdateHospitalBedsFailAction
  | ShowMessageAction
  | HideMessageAction;
