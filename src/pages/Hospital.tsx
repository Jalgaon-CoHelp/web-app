import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FinitePagination from "../components/PaginationComponent";
import {
  getHospitalsRequestAction,
  hideMessageAction,
} from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import HospitalData from "../components/HospitalData";
import { Alert, Col, Nav, Row, Spinner, Container } from "react-bootstrap";
import Select from "react-select";
import {
  getTalukasRequestAction,
  selectBedAction,
  selectTalukaAction,
} from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import { getHospitalType, OptionsType } from "./types";
import { Colors } from "../utils/colors";

const limit = 30;

const Hospital = () => {
  const defaultOption: OptionsType = {
    value: "",
    label: "All",
  };
  const [talukaState, setTalukaState] = useState<OptionsType>(defaultOption);
  const [bedState, setBedState] = useState<OptionsType>(defaultOption);

  const dispatch = useDispatch(),
    { hospitals, total, isLoading, variant, message }: HospitalState =
      useSelector((state: AppState) => state.hospital),
    { selectedTaluka, talukas, selectedBed }: TalukaState = useSelector(
      (state: AppState) => state.taluka
    ),
    onPageChanged = (pageNumber: number) => setPageNumber(pageNumber),
    [pageNumber, setPageNumber] = useState(0),
    [paginationKey, setPaginationKey] = useState<string>("init-pagination");

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
    setTalukaState(taluka);
    dispatch(selectTalukaAction(taluka));
    setPaginationKey(Date.now().toString());
    setPageNumber(0);
  };

  const handleBedChange = (bed: any) => {
    setBedState(bed);
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

  useEffect(() => {
   if(message === "Hospital Bed Counts Updated Successfully!"){
      getHospitals({
        pageNumber: pageNumber,
        bedType: selectedBed.value,
        talukaId: selectedTaluka.value,
      });
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  const talukaOptions = talukas.map(mapTalukasToSelectOptions);
  talukaOptions.unshift(defaultOption);

  const showSpinner = () => {
    return (
      <div className="d-flex justify-content-center align-items-center pt-3 pb-3">
        <Spinner animation="border" style={{ color: Colors.primaryColor }} />
      </div>
    );
  };

  const showNoResults = () => {
    return (
      <div className="d-flex justify-content-center align-items-center pt-2 pb-2">
        <Alert variant="primary">No Hospitals Found</Alert>
      </div>
    );
  };

  const showHospitals = () => {
    return (
      <HospitalData hospitals={hospitals} isLoading={isLoading} total={total} />
    );
  };

  const showResult = () => {
    if (isLoading) {
      return showSpinner();
    } else if (total === 0) {
      return showNoResults();
    } else {
      return showHospitals();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideMessageAction());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, message]);

  return (
    <Container fluid>
      <div className="d-block mx-auto p-3 text-center">
        <p>
          <div className="color-primary">
            You can find hospital and the status of beds availability here.
          </div>
          <i className="text-danger">
            All the information which is available here is maintained by the
            volunteers of Jalgaon CoHelp. We don't guarantee the Genuineness of
            the information here.
          </i>
        </p>
      </div>
      <Row className="d-flex align-items-center justify-content-center page-header">
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6>Select Taluka: </h6>
          <Select
            value={talukaState}
            onChange={(selectedOption) => handleTalukaChange(selectedOption)}
            options={talukaOptions}
            placeholder="Select taluka"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6>Select Bed type: </h6>
          <Select
            value={bedState}
            onChange={(selectedOption) => handleBedChange(selectedOption)}
            options={bedTypeOptions}
            placeholder="Select bed type"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Nav className="justify-content-end">
            <FinitePagination
              itemsPerPage={limit}
              totalItems={total}
              onPageChanged={onPageChanged}
              key={paginationKey}
            />
          </Nav>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center page-header">
        <Col lg={4} md={4} sm={12} xs={12}>
          {message &&
            message !== "Bed count should not be negative" && (
              <Alert variant={variant}>{message}</Alert>
            )}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          {showResult()}
        </Col>
      </Row>
    </Container>
  );
};

export default Hospital;
