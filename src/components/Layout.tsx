import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Col, Container, Figure, Row } from "react-bootstrap";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className="p-3">
        <div className="d-block mx-auto text-center">
        <Figure>
          <p className="font-weight-light">
            The Crowdsourced resources to fight COVID across Jalgaon District. Find hospital beds, oxygen, plasma, and more.
          </p>
          <figcaption className="blockquote-footer">
            From the Citizens, To the Citizens
          </figcaption>
        </Figure>
        </div>
      
      </Container>
      <Container fluid className="border">{children}</Container>
      <Container fluid className="pt-3 pl-3 pr-3">
        <h3 className="m-3">Want to Contribute to Jalgaon CoHelp?</h3>
        <Row className="border p-3">
          <Col>You can help us by being volunteer with us and providing the valid information you have.</Col>
          <Col> Show button here for registration</Col>
        </Row>
        <Row  className="border p-3">
          <Col>Any hospital information is missing of invalid? Fill this form to help us.</Col>
          <Col> Show button here for Google form link</Col>
        </Row>
        <Row  className="border p-3">
          <Col>Do you have any feedback / grievance for Jalgaon CoHelp?</Col>
          <Col> Show button here for Google form link</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
