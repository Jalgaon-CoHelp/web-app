import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { AppState } from "../redux/store";
import { getTalukasRequestAction } from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import {
  hideSuccessMessageAction,
  userRegisterRequestAction,
} from "../redux/user/actions.";
import { UserState } from "../redux/user/types";
import { Colors } from "../utils/colors";
import { OptionsType } from "./types";

const Register = () => {
  const talukaDefaultOption: OptionsType = {
      value: "1",
      label: "Jalgaon",
    },
    [name, setName] = useState<string>(""),
    [number, setNumber] = useState<string>(""),
    [nameInvalid, setNameInvalid] = useState<boolean>(false),
    [numberInvalid, setNumberInvalid] = useState<boolean>(false),
    [email, setEmail] = useState<string>(""),
    [emailInvalid, setEmailInvalid] = useState<boolean>(false),
    [taluka, setTaluka] = useState<OptionsType>(talukaDefaultOption),
    dispatch = useDispatch(),
    { talukas }: TalukaState = useSelector((state: AppState) => state.taluka),
    { isLoading, showSuccessMessage }: UserState = useSelector(
      (state: AppState) => state.user
    );

  useEffect(() => {
    dispatch(getTalukasRequestAction());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideSuccessMessageAction());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, showSuccessMessage]);

  const handleTalukaChange = (taluka: any) => {
    setTaluka(taluka);
  };

  const mapTalukasToSelectOptions = (taluka: Taluka): OptionsType => ({
    value: taluka.id.toString(),
    label: taluka.name,
  });

  const talukaOptions = talukas.map(mapTalukasToSelectOptions);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (name === "") {
      setNameInvalid(true);
    } else if (email === "") {
      setEmailInvalid(true);
    } else if (number === "") {
      setNumberInvalid(true);
    } else {
      dispatch(
        userRegisterRequestAction({
          name,
          mobile: number,
          email,
          talukaId: Number(taluka.value),
        })
      );
      setName("");
      setEmail("");
      setNumber("");
    }
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        <Toast
          onClose={() => dispatch(hideSuccessMessageAction())}
          show={showSuccessMessage}
          delay={3000}
        >
          <Toast.Header>
            <strong className="mr-auto custom-toast-message">
              User Registered Successfully
            </strong>
          </Toast.Header>
        </Toast>
      </div>
      <Row className="form-wrapper">
        <Col lg={4} md={8} sm={10} xs={12}>
          {isLoading ? (
            <Spinner
              animation="border"
              style={{ color: Colors.primaryColor }}
            />
          ) : (
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
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  isInvalid={emailInvalid}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Email Required
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
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Row className="py-3">
                <Col className="text-secondary">
                   User ?
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: Colors.primaryColor,
                      marginLeft: "0.5rem",
                    }}
                  >
                    Login
                  </Link>
                </Col>
              </Row>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Register;
