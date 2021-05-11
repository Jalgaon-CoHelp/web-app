import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { AppState } from "../redux/store";
import { getTalukasRequestAction } from "../redux/taluka/actions.";
import { Taluka, TalukaState } from "../redux/taluka/types";
import {
  hideMessageAction,
  showMessageAction,
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
    [password, setPassword] = useState<string>(""),
    [passwordInvalid, setPasswordInvalid] = useState<boolean>(false),
    [taluka, setTaluka] = useState<OptionsType>(talukaDefaultOption),
    dispatch = useDispatch(),
    { talukas }: TalukaState = useSelector((state: AppState) => state.taluka),
    { isLoading, message, variant }: UserState = useSelector(
      (state: AppState) => state.user
    );

  useEffect(() => {
    dispatch(getTalukasRequestAction());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideMessageAction());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, message]);

  const showSuccessMessage = () => {
    dispatch(
      showMessageAction({
        message: "Registered Successfully!",
        variant: "success",
      })
    );
  };
  const emptyFormField = () => {
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
  };

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
      dispatch(
        showMessageAction({
          message: "Name should not be empty!",
          variant: "danger",
        })
      );
    } else if (email === "") {
      setEmailInvalid(true);
      dispatch(
        showMessageAction({
          message: "Email should not be empty!",
          variant: "danger",
        })
      );
    } else if (password === "" || password.length < 4) {
      setPasswordInvalid(true);
      dispatch(
        showMessageAction({
          message: "Password should not be empty and less than 4 characters!",
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
        userRegisterRequestAction({
          name,
          mobile: number,
          email,
          talukaId: Number(taluka.value),
          password,
          callback: showSuccessMessage,
          emptyFormField,
        })
      );
    }
  };

  const showResult = () => {
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                isInvalid={passwordInvalid}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password Required
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
                Already Registered ?
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
        </>
      );
    }
  };
  return (
    <div>
      <div className="d-block mx-auto p-3 text-center">
        <p>
          Being a volunteer you can update the hospital's bed availability. Your
          Contribution will help finding needed resources.
        </p>
      </div>
      <Row className="form-wrapper">
        <Col lg={4} md={8} sm={10} xs={12}>
          {showResult()}
        </Col>
      </Row>
    </div>
  );
};

export default Register;
