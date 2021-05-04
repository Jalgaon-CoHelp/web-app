import { IconProp } from "@fortawesome/fontawesome-svg-core";
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


export interface HospitalDetailsPropsType {
  name: string;
  address?: string;
  taluka:string;
  contact1?:string;
  contact2?:string
  updatedAt:number;
}

export interface BedCountPropsType {
  icon: IconProp;
  count?: number;
  type: string;
}