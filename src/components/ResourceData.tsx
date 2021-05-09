import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ResourcePropsType } from "./types";
import { ResourceResponseObject } from "../redux/resources/types";
import ResourceDetails from "./ResourceDetails";

const ResourceData: React.FC<ResourcePropsType> = ({
  total,
  resources,
}: ResourcePropsType) => {
  return (
    <Container fluid>
      <div className="justify-content-start h5">Total: {total}</div>
      <Row className="mb-3">
        {resources.map((resource: ResourceResponseObject, index: number) => {
          if (index % 2 === 0) {
            return (
              <Col lg={6} md={6} sm={12} xs={12} className="mt-3" key={index}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <ResourceDetails
                          name={resource.contactName}
                          address={resource.address}
                          taluka={resource.taluka}
                          mobileNumber={resource.mobileNumber}
                          note={resource.note}
                          createdAt={resource.createdAt}
                          resource={resource.resourceName}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          } else {
            return (
              <Col lg={6} md={6} sm={12} xs={12} className="mt-3" key={index}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <ResourceDetails
                          name={resource.contactName}
                          address={resource.address}
                          taluka={resource.taluka}
                          mobileNumber={resource.mobileNumber}
                          note={resource.note}
                          createdAt={resource.createdAt}
                          resource={resource.resourceName}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default ResourceData;
