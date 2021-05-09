import React from "react";
import { Col, Row, Container, Tabs, Tab } from "react-bootstrap";
import RequestedResources from "../components/RequestedResources";
import SuppliedResources from "../components/SuppliedResources";

const Resources = () => {
  return (
    <Container fluid className="page-header">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Tabs defaultActiveKey="supplied" id="uncontrolled-tab-example">
            <Tab eventKey="supplied" title="Supplied Resources">
              <SuppliedResources />
            </Tab>
            <Tab eventKey="request" title="Requested Resources">
              <RequestedResources />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;
