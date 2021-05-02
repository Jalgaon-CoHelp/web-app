import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { getHospitalsRequestAction } from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import HospitalData from "../components/HospitalData";

const Hospital = () => {
  const dispatch = useDispatch(),
    { hospitals, total, isLoading }: HospitalState = useSelector(
      (state: AppState) => state.hospital
    ),
    changePage = (pageNumber: number) =>
      dispatch(getHospitalsRequestAction({ limit: 50, page: pageNumber }));

  useEffect(() => {
    dispatch(getHospitalsRequestAction({ limit: 50, page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <HospitalData hospitals={hospitals} isLoading={isLoading} />
      <Pagination
        hospitalsPerPage={50}
        totalHospitals={total}
        changePage={changePage}
      />
    </div>
  );
};

export default Hospital;
