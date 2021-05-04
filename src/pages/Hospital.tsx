import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FinitePagination from "../components/PaginationComponent";
import { getHospitalsRequestAction } from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import HospitalData from "../components/HospitalData";
import { Col, Nav, Row } from "react-bootstrap";
import Select from "react-select";
import {
  getTalukasRequestAction,
  selectBedAction,
  selectTalukaAction,
} from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import { getHospitalType, OptionsType } from "./types";

const limit = 30;

const Hospital = () => {
  const dispatch = useDispatch(),
    { hospitals, total, isLoading }: HospitalState = useSelector(
      (state: AppState) => state.hospital
    ),
    { selectedTaluka, talukas, selectedBed }: TalukaState = useSelector(
      (state: AppState) => state.taluka
    ),
    onPageChanged = (pageNumber: number) => setPageNumber(pageNumber),
    [pageNumber, setPageNumber] = useState(0),
    [paginationKey, setPaginationKey] = useState<string>("demo");

  const getHospitals = (page: getHospitalType) => {
    dispatch(
      getHospitalsRequestAction({
        limit: limit,
        page: page.pageNumber,
        talukaId: selectedTaluka.value,
        bedType: selectedBed.value,
      })
    );
  };

  useEffect(() => {
    getHospitals({
      pageNumber: 0,
      bedType: selectedBed.value,
      talukaId: selectedTaluka.value,
    });
    dispatch(getTalukasRequestAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    getHospitals({
      pageNumber: pageNumber,
      bedType: selectedBed.value,
      talukaId: selectedTaluka.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBed, selectedTaluka, pageNumber]);

  const handleTalukaChange = (taluka: any) => {
    dispatch(selectTalukaAction(taluka));
    setPaginationKey(Date.now().toString());
    setPageNumber(0);
  };

  const handleBedChange = (bed: any) => {
    dispatch(selectBedAction(bed));
    setPaginationKey(Date.now().toString());
    setPageNumber(0);
  };

  const mapTalukasToSelectOptions = (taluka: Taluka): OptionsType => ({
    value: taluka.id.toString(),
    label: taluka.name,
  });

  const bedTypeOptions: OptionsType[] = [
    {
      value: "",
      label: "All",
    },
    {
      value: "general",
      label: "General",
    },
    {
      value: "oxygen",
      label: "Oxygen",
    },
    {
      value: "icu",
      label: "ICU",
    },
    {
      value: "ventilator",
      label: "Ventilator",
    },
  ];

  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={4} xs={4}>
          <Select
            value={selectedTaluka}
            onChange={(selectedOption) => handleTalukaChange(selectedOption)}
            options={talukas.map(mapTalukasToSelectOptions)}
            placeholder="Select taluka"
          />
        </Col>
        <Col lg={3} md={3} sm={6} xs={6}>
          <Select
            value={selectedBed}
            onChange={(selectedOption) => handleBedChange(selectedOption)}
            options={bedTypeOptions}
            placeholder="Select bed type"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Nav className="d-flex justify-content-end">
            <FinitePagination
              itemsPerPage={limit}
              totalItems={total}
              onPageChanged={onPageChanged}
              key={paginationKey}
            />
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <HospitalData hospitals={hospitals} isLoading={isLoading} />
        </Col>
      </Row>
    </div>
  );
};

export default Hospital;
