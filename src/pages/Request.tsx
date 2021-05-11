import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  requestResourceRequestAction,
  showMessageAction,
  hideMessageAction,
} from "../redux/request/actions";
import { RequestResourceState } from "../redux/request/types";
import { AppState } from "../redux/store";
import {
  getTalukasRequestAction,
  selectTalukaAction,
} from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import { Colors } from "../utils/colors";
import { OptionsType } from "./types";

const Request = () => {
  const talukaDefaultOption: OptionsType = {
      value: "1",
      label: "Jalgaon",
    },
    resourceTypeDefaultOption: OptionsType = {
      value: "bed",
      label: "Bed",
    },
    [name, setName] = useState<string>(""),
    [number, setNumber] = useState<string>(""),
    [nameInvalid, setNameInvalid] = useState<boolean>(false),
    [numberInvalid, setNumberInvalid] = useState<boolean>(false),
    [note, setNote] = useState<string>(""),
    [address, setAddress] = useState<string>(""),
    [taluka, setTaluka] = useState<OptionsType>(talukaDefaultOption),
    [resourceType, setResourceType] = useState<OptionsType>(
      resourceTypeDefaultOption
    ),
    dispatch = useDispatch(),
    { talukas }: TalukaState = useSelector((state: AppState) => state.taluka),
    { isLoading, variant, message }: RequestResourceState = useSelector(
      (state: AppState) => state.request
    );

  useEffect(() => {
    dispatch(getTalukasRequestAction());
  }, [dispatch]);

  const handleTalukaChange = (taluka: any) => {
    setTaluka(taluka);
    dispatch(selectTalukaAction(taluka));
  };
  const handleResourceTypeChange = (resourceType: any) => {
    setResourceType(resourceType);
  };
  const mapTalukasToSelectOptions = (taluka: Taluka): OptionsType => ({
    value: taluka.id.toString(),
    label: taluka.name,
  });
  const talukaOptions = talukas.map(mapTalukasToSelectOptions);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideMessageAction());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, message]);

  const showSuccessMessage = () => {
    dispatch(
      showMessageAction({
        message: "Request Registered Successfully!",
        variant: "success",
      })
    );
  };
  const emptyFormField = () => {
    setName("");
    setAddress("");
    setNote("");
    setNumber("");
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (name === "") {
      setNameInvalid(true);
      dispatch(
        showMessageAction({
          message: "Name should not be empty!",
          variant: "danger",
        })
      );
    } else if (number === "") {
      setNumberInvalid(true);
      dispatch(
        showMessageAction({
          message: "Mobile number should not be empty!",
          variant: "danger",
        })
      );
    } else {
      dispatch(
        requestResourceRequestAction({
          contactName: name,
          mobileNumber: number,
          note,
          address,
          resourceName: resourceType.value,
          talukaId: Number(taluka.value),
          showSuccessMessage,
          emptyFormField,
        })
      );
    }
  };

  const showResults = () => {
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" style={{ color: Colors.primaryColor }} />
        </div>
      );
    } else {
      return (
        <>
          {message && <Alert variant={variant}>{message}</Alert>}
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                isInvalid={nameInvalid}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Name Required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number"
                isInvalid={numberInvalid}
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Mobile Number Required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Select Taluka</Form.Label>
              <Select
                value={taluka}
                onChange={(selectedOption) =>
                  handleTalukaChange(selectedOption)
                }
                options={talukaOptions}
                placeholder="Select Taluka"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Select Resource Type</Form.Label>
              <Select
                value={resourceType}
                onChange={(selectedOption) =>
                  handleResourceTypeChange(selectedOption)
                }
                options={resourceTypeOptions}
                placeholder="Select Resource Type"
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Note"
                as="textarea"
                rows={3}
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Request
            </Button>
          </Form>
        </>
      );
    }
  };
  return (
    <div>
      <div className="d-block mx-auto p-3 text-center">
        <p>
          If you're a patient or someone who need resources then please fill the
          form. If anybody has information about the resources then they can
          directly reach to you and will help you.
        </p>
        <p>
          We believe you'll only add Genuine information here which will be
          helpful!
        </p>
      </div>
      <Row className="form-wrapper">
        <Col lg={4} md={8} sm={10} xs={12}>
          {showResults()}
        </Col>
      </Row>
    </div>
  );
};

export default Request;
