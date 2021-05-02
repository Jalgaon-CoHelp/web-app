import { Hospital } from "../redux/hospital/types";

export interface PaginationPropsType {
  hospitalsPerPage: number;
  totalHospitals: number;
  changePage: Function;
}

export interface HospitalPropsType {
  hospitals: Hospital[];
  isLoading: boolean;
}
