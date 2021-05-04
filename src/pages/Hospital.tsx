import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { getHospitalsRequestAction } from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import HospitalData from "../components/HospitalData";
import { Col, Row } from "react-bootstrap";

const Hospital = () => {
  const dispatch = useDispatch(),
    { hospitals, total, isLoading }: HospitalState = useSelector(
      (state: AppState) => state.hospital
    ),
    changePage = (pageNumber: number) =>
      dispatch(getHospitalsRequestAction({ limit: 50, page: pageNumber }));

  useEffect(() => {
    dispatch(getHospitalsRequestAction({ limit: 50, page: 0 }));
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <HospitalData hospitals={hospitals} isLoading={isLoading}  />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Pagination
            hospitalsPerPage={50}
            totalHospitals={total}
            changePage={changePage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hospital;
