import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faPen } from "@fortawesome/free-solid-svg-icons";

const Layout: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <Container className="p-3">
        <div className="d-block mx-auto text-center">
          <Figure>
            <p className="font-weight-light">
              The Crowdsourced resources to fight COVID across Jalgaon District.
              Find hospital beds, oxygen, plasma, and more.
            </p>
            <figcaption className="blockquote-footer">
              From the Citizens, To the Citizens
            </figcaption>
          </Figure>
        </div>
      </Container>
      <Container fluid className="border">
        {children}
      </Container>
      <Container fluid className="pt-3 pl-3 pr-3">
        <h3 className="m-3">Want to Contribute to Jalgaon CoHelp?</h3>
        <Row className="border p-3">
          <Col lg={8} md={8} sm={12} xs={12} className="pt-2 pb-2">
            You can help us by being volunteer with us and providing the valid
            information you have.
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="pt-2 pb-2">
            <Button onClick={() => history.push("/volunteer")}>
              <FontAwesomeIcon
                icon={faHandsHelping}
                style={{ marginRight: "0.5rem" }}
              />
              Be volunteer with us
            </Button>
          </Col>
        </Row>
        <Row className="border p-3">
          <Col lg={8} md={8} sm={12} xs={12} className="pt-2 pb-2">
            Any hospital information is missing or invalid? Fill this form to
            help us.
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="pt-2 pb-2">
            <a
              href="https://forms.gle/5WQrfqUC8hZTiE3N9"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ marginRight: "0.5rem" }}
                />
                Fill Form
              </Button>
            </a>
          </Col>
        </Row>
        <Row className="border p-3">
          <Col lg={8} md={8} sm={12} xs={12} className="pt-2 pb-2">
            Do you have any feedback / grievance for Jalgaon CoHelp?
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="pt-2 pb-2">
            <a
              href="https://forms.gle/5hokbEq71J6NbzW4A"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ marginRight: "0.5rem" }}
                />
                Fill Form
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
