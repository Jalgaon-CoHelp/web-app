import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { HospitalActionTypes, HospitalActions, HospitalState } from "./types";

const initialState: HospitalState = {
  errorMessage: "",
  isLoading: false,
  total: 0,
  pages: 0,
  hospitals: [],
  variant: "",
};

export const hospitalReducer: Reducer<HospitalState, HospitalActions> = produce(
  (draftState: Draft<HospitalState>, action: HospitalActions) => {
    switch (action.type) {
      case HospitalActionTypes.GET_HOSPITALS_REQUEST:
        draftState.isLoading = true;
        break;
      case HospitalActionTypes.GET_HOSPITALS_SUCCESS:
        draftState.isLoading = false;
        draftState.pages = action.payload.pages;
        draftState.total = action.payload.total;
        draftState.hospitals = action.payload.hospitals;
        break;
      case HospitalActionTypes.GET_HOSPITALS_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_REQUEST:
        draftState.isLoading = true;
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_SUCCESS:
        draftState.isLoading = false;
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
        break;
      case HospitalActionTypes.SHOW_MESSAGE:
        draftState.errorMessage = action.payload.message;
        draftState.variant = action.payload.variant;
        break;
      case HospitalActionTypes.HIDE_MESSAGE:
        draftState.errorMessage = "";
        break;
    }
  },
  initialState
);

export default hospitalReducer;
