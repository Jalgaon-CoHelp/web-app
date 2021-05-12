import produce, { Draft } from "immer";
import { Reducer } from "redux";
import {
  HospitalActionTypes,
  HospitalActions,
  HospitalState,
  Hospital,
} from "./types";

const initialState: HospitalState = {
  message: "",
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
        draftState.message = action.payload;
        draftState.variant = "danger";
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_REQUEST:
        const currentHospitals = draftState.hospitals;

        const newHospitals: Hospital[] = [];

        currentHospitals.forEach((value) => {
          if (action.payload.id === value.id) {
            newHospitals.push({
              id: value.id,
              name: value.name,
              address: value.address,
              taluka: value.taluka,
              contact1: value.contact1,
              contact2: value.contact2,
              beds: {
                general: action.payload.general,
                oxygen: action.payload.oxygen,
                icu: action.payload.icu,
                ventilator: action.payload.ventilator,
              },
              createdAt: value.createdAt,
              updatedAt: new Date().getTime(),
            });
          } else {
            newHospitals.push(value);
          }
        });

        draftState.hospitals = newHospitals;
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_SUCCESS:
        draftState.isLoading = false;
        break;
      case HospitalActionTypes.UPDATE_HOSPITAL_BEDS_FAIL:
        draftState.isLoading = false;
        draftState.message = action.payload;
        draftState.variant = "danger";
        break;
      case HospitalActionTypes.SHOW_MESSAGE:
        draftState.message = action.payload.message;
        draftState.variant = action.payload.variant;
        break;
      case HospitalActionTypes.HIDE_MESSAGE:
        draftState.message = "";
        break;
    }
  },
  initialState
);

export default hospitalReducer;
