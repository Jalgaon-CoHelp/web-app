import {
  GetTalukasFailAction,
  GetTalukasRequestAction,
  GetTalukasSuccessAction,
  GetTalukasSuccessResponse,
  SelectBed,
  SelectBedAction,
  SelectTaluka,
  SelectTalukaAction,
  TalukaActionTypes,
} from "./types";

export const getTalukasRequestAction = (): GetTalukasRequestAction => ({
  type: TalukaActionTypes.GET_TALUKAS_REQUEST,
});

export const getTalukasSuccessAction = (
  talukas: GetTalukasSuccessResponse[]
): GetTalukasSuccessAction => ({
  type: TalukaActionTypes.GET_TALUKAS_SUCCESS,
  payload: talukas,
});

export const getTalukasFailAction = (error: string): GetTalukasFailAction => ({
  type: TalukaActionTypes.GET_TALUKAS_FAIL,
  payload: error,
});

export const selectTalukaAction = (
  taluka: SelectTaluka
): SelectTalukaAction => ({
  type: TalukaActionTypes.SELECT_TALUKA,
  payload: taluka,
});

export const selectBedAction = (bed: SelectBed): SelectBedAction => ({
  type: TalukaActionTypes.SELECT_BED,
  payload: bed,
});
