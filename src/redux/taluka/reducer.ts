import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { TalukaActionTypes, TalukaActions, TalukaState } from "./types";

const initialState: TalukaState = {
  errorMessage: "",
  isLoading: false,
  talukas: [],
  selectedTaluka: {
    value: "",
    label: "",
  },
  selectedBed: {
    value: "",
    label: "",
  },
};

export const talukaReducer: Reducer<TalukaState, TalukaActions> = produce(
  (draftState: Draft<TalukaState>, action: TalukaActions) => {
    switch (action.type) {
      case TalukaActionTypes.GET_TALUKAS_REQUEST:
        draftState.isLoading = true;
        break;
      case TalukaActionTypes.GET_TALUKAS_SUCCESS:
        draftState.isLoading = false;
        draftState.talukas = action.payload;
        break;
      case TalukaActionTypes.GET_TALUKAS_FAIL:
        draftState.isLoading = false;
        draftState.errorMessage = action.payload;
        break;
      case TalukaActionTypes.SELECT_TALUKA:
        draftState.isLoading = false;
        draftState.selectedTaluka.label = action.payload.label;
        draftState.selectedTaluka.value = action.payload.value;
        break;
      case TalukaActionTypes.SELECT_BED:
        draftState.isLoading = false;
        draftState.selectedBed.value = action.payload.value;
        draftState.selectedBed.label = action.payload.label;
        break;
    }
  },
  initialState
);

export default talukaReducer;
