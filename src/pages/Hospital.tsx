import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FinitePagination from "../components/PaginationComponent";
import { getHospitalsRequestAction } from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import HospitalData from "../components/HospitalData";
import { Col, Row } from "react-bootstrap";

const limit = 30;

const Hospital = () => {
  const dispatch = useDispatch(),
    { hospitals, total, isLoading }: HospitalState = useSelector(
      (state: AppState) => state.hospital
    ),
    onPageChanged = (pageNumber: number) =>
      dispatch(getHospitalsRequestAction({ limit: limit, page: pageNumber }));

  useEffect(() => {
    dispatch(getHospitalsRequestAction({ limit: limit, page: 0 }));
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <HospitalData hospitals={hospitals} isLoading={isLoading} />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <FinitePagination
            itemsPerPage={limit}
            totalItems={total}
            onPageChanged={onPageChanged}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hospital;
