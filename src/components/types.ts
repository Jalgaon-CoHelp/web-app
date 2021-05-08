import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Hospital } from "../redux/hospital/types";

export interface PaginationPropsType {
  itemsPerPage: number;
  totalItems: number;
  onPageChanged: Function;
  key:string;
}

export interface HospitalPropsType {
  hospitals: Hospital[];
  isLoading: boolean;
  total:number;
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