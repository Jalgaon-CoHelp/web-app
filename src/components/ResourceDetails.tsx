import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faCity,
  faHistory,
  faStickyNote,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Col, Row } from "react-bootstrap";
import moment from "moment";
import { ResourceDetailsPropsType } from "./types";

const ResourceDetails = ({
  name,
  address,
  taluka,
  mobileNumber,
  resource,
  note,
  createdAt,
}: ResourceDetailsPropsType) => {
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className="font-weight-bold text-secondary">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {name}
          </p>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className="font-weight-bold text-secondary">
            Resource:
            <Badge
              className="badge-resource p-1 text-capitalize"
              style={{ fontSize: "medium" }}
            >
              {" "}
              {resource}
            </Badge>
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
            {address === undefined ? "-" : address}
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faCity} />
            <Badge className="badge-city">{taluka}</Badge>
          </p>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            <Badge className="badge-mobile">{mobileNumber}</Badge>
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faHistory} />
            <Badge className="badge-updated">
              {moment(createdAt).fromNow()}
            </Badge>
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faStickyNote} />
            {note === undefined ? "-" : note}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ResourceDetails;
