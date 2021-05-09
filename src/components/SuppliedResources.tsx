import React, { useEffect, useState } from "react";
import { Alert, Col, Nav, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { OptionsType } from "../pages/types";
import { getSuppliedResourcesRequestAction } from "../redux/resources/actions";
import { ResourceRequest, ResourceState } from "../redux/resources/types";
import { AppState } from "../redux/store";
import { getTalukasRequestAction } from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import { Colors } from "../utils/colors";
import FinitePagination from "./PaginationComponent";
import ResourceData from "./ResourceData";

const limit = 30;
const SuppliedResources = () => {
  const talukDefaultOption: OptionsType = {
      value: "",
      label: "All",
    },
    resourceTypeDefaultOption: OptionsType = {
      value: "",
      label: "All",
    },
    [taluka, setTaluka] = useState<OptionsType>(talukDefaultOption),
    [resourceType, setResourceType] = useState<OptionsType>(
      resourceTypeDefaultOption
    ),
    onPageChanged = (pageNumber: number) => setPageNumber(pageNumber),
    [pageNumber, setPageNumber] = useState(0),
    [paginationKey, setPaginationKey] = useState<string>("init-pagination"),
    dispatch = useDispatch(),
    { talukas }: TalukaState = useSelector((state: AppState) => state.taluka),
    {
      isSuppliedResourcesLoading,
      pages,
      suppliedResources,
      suppliedResourcesTotal,
    }: ResourceState = useSelector(
      (state: AppState) => state.resourcesRequestedRequired
    );

  const getResources = (resource: ResourceRequest) => {
    dispatch(
      getSuppliedResourcesRequestAction({
        type: "supply",
        resource: resourceType.value,
        limit: limit,
        page: resource.page,
        talukaId: taluka.value,
      })
    );
  };

  useEffect(() => {
    getResources({
      type: "supply",
      resource: resourceType.value,
      limit: limit,
      page: 0,
      talukaId: taluka.value,
    });
    dispatch(getTalukasRequestAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    getResources({
      type: "supply",
      resource: resourceType.value,
      limit: limit,
      page: pageNumber,
      talukaId: taluka.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taluka, resourceType, pageNumber]);

  const handleTalukaChange = (taluka: any) => {
    setTaluka(taluka);
    setPaginationKey(Date.now().toString());
    setPageNumber(0);
  };

  const mapTalukasToSelectOptions = (taluka: Taluka): OptionsType => ({
    value: taluka.id.toString(),
    label: taluka.name,
  });

  const resourceTypeOptions: OptionsType[] = [
    {
      label: "Bed",
      value: "bed",
    },
    {
      label: "Oxygen",
      value: "oxygen",
    },
    {
      label: "Plasma",
      value: "plasma",
    },
    {
      label: "Oximeter",
      value: "oximeter",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  resourceTypeOptions.unshift(resourceTypeDefaultOption);
  const talukaOptions = talukas.map(mapTalukasToSelectOptions);
  talukaOptions.unshift(talukDefaultOption);

  const handleResourceTypeChange = (resourceType: any) => {
    setResourceType(resourceType);
    setPaginationKey(Date.now().toString());
    setPageNumber(0);
  };

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
        <Alert variant="danger">No Resources Found</Alert>
      </div>
    );
  };

  const showResources = () => {
    return (
      <ResourceData
        total={suppliedResourcesTotal}
        resources={suppliedResources}
      />
    );
  };

  const showResult = () => {
    if (isSuppliedResourcesLoading) {
      return showSpinner();
    } else if (suppliedResourcesTotal === 0) {
      return showNoResults();
    } else {
      return showResources();
    }
  };
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center page-header">
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6>Select Taluka: </h6>
          <Select
            value={taluka}
            onChange={(selectedOption) => handleTalukaChange(selectedOption)}
            options={talukaOptions}
            placeholder="Select Taluka"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h6>Select Bed type: </h6>
          <Select
            value={resourceType}
            onChange={(selectedOption) =>
              handleResourceTypeChange(selectedOption)
            }
            options={resourceTypeOptions}
            placeholder="Select Resource type"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Nav className="justify-content-end">
            <FinitePagination
              itemsPerPage={limit}
              totalItems={suppliedResourcesTotal}
              onPageChanged={onPageChanged}
              key={paginationKey}
            />
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          {showResult()}
        </Col>
      </Row>
    </>
  );
};

export default SuppliedResources;
