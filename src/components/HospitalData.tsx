import React from "react";
import { Hospital as HospitalType } from "../redux/hospital/types";
import { HospitalPropsType } from "./types";

const HospitalData: React.FC<HospitalPropsType> = ({
  hospitals,
  isLoading,
}: HospitalPropsType) => {
  return (
    <ul className="list-group mb-4">
      {hospitals.map((hospital: HospitalType) => (
        <li key={hospital.id} className="list-group-item">
          {hospital.name}
          {hospital.id}
        </li>
      ))}
    </ul>
  );
};

export default HospitalData;
