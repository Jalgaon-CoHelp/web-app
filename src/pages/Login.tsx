import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppState } from "../redux/store";
import {
  hideMessageAction,
  showMessageAction,
  userLoginRequestAction,
} from "../redux/user/actions.";
import { UserState } from "../redux/user/types";
import { Colors } from "../utils/colors";

const Login = () => {
  const [password, setPassword] = useState<string>(""),
    history = useHistory(),
    [passwordInvalid, setPasswordInvalid] = useState<boolean>(false),
    [email, setEmail] = useState<string>(""),
    [emailInvalid, setEmailInvalid] = useState<boolean>(false),
    dispatch = useDispatch(),
    { isLoading, variant, message }: UserState = useSelector(
      (state: AppState) => state.user
    );

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (email === "") {
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
          message: "Password should be of minimum 4 characters!",
          variant: "danger",
        })
      );
    } else {
      dispatch(
        userLoginRequestAction({
          email,
          password,
          callBack: toHomePage,
          emptyFormField,
        })
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideMessageAction());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, message]);

  const emptyFormField = () => {
    setEmail("");
    setPassword("");
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                isInvalid={emailInvalid}
                value={email}
                autoComplete="on"
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
                autoComplete="on"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password Required
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Row className="py-3">
              <Col className="text-secondary">
                Want to be volunteer ?
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: Colors.primaryColor,
                    marginLeft: "0.5rem",
                  }}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Form>
        </>
      );
    }
  };
  const toHomePage = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div>
      <Row className="form-wrapper">
        <Col lg={4} md={8} sm={10} xs={12}>
          {showResult()}
        </Col>
      </Row>
    </div>
  );
};

export default Login;
