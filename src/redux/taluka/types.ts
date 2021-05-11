import { Action } from "redux";


export interface SelectBed {
  value: string;
  label: string;
}
export interface Taluka {
  id: number;
  name: string;
}
export interface GetTalukasSuccessResponse {
  id: number;
  name: string;
}

export interface SelectTaluka {
  value: string;
  label: string;
}
export interface TalukaState {
  message: string;
  isLoading: boolean;
  talukas: Taluka[];
  selectedTaluka: SelectTaluka;
  selectedBed: SelectBed;
}

export enum TalukaActionTypes {
  GET_TALUKAS_REQUEST = "GET_TALUKAS_REQUEST",
  GET_TALUKAS_SUCCESS = "GET_TALUKAS_SUCCESS",
  GET_TALUKAS_FAIL = "GET_TALUKAS_FAIL",
  SELECT_TALUKA = "SELECT_TALUKA",
  SELECT_BED = "SELECT_BED",
}

export interface GetTalukasRequestAction extends Action {
  type: typeof TalukaActionTypes.GET_TALUKAS_REQUEST;
}

export interface GetTalukasSuccessAction extends Action {
  payload: GetTalukasSuccessResponse[];
  type: typeof TalukaActionTypes.GET_TALUKAS_SUCCESS;
}

export interface GetTalukasFailAction extends Action {
  payload: string;
  type: typeof TalukaActionTypes.GET_TALUKAS_FAIL;
}

export interface SelectTalukaAction extends Action {
  payload: SelectTaluka;
  type: typeof TalukaActionTypes.SELECT_TALUKA;
}

export interface SelectBedAction extends Action {
  payload: SelectBed;
  type: typeof TalukaActionTypes.SELECT_BED;
}


export type TalukaActions =
  | GetTalukasRequestAction
  | GetTalukasSuccessAction
  | GetTalukasFailAction
  | SelectTalukaAction
  | SelectBedAction;
