import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
          <p>
            This is an Open Source Project
            <a
              style={{ margin: "0 0.5rem" }}
              href="https://github.com/jalgaon-cohelp"
              target="_blank"
              rel="noreferrer"
            >
              Click here for the Code.
            </a>
            Please contribute to make it better.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
