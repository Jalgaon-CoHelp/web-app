import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faCity,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import moment from 'moment';
import { HospitalDetailsPropsType } from "./types";

const HospitalDetails = ({
  name,
  address,
  taluka,
  contact1,
  contact2,
  updatedAt,
}: HospitalDetailsPropsType) => {
  return (
    <div>
      <h3 className="font-weight-bold hospital-name">{name}</h3>
      <p className="text-secondary">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {address === undefined ? "-" : address}
      </p>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            {contact1 === undefined ? "-" : contact1}
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            {contact2 === undefined ? "-" : contact2}
          </p>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faCity} />
            {taluka}
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faHistory} />
            {moment(updatedAt).fromNow()}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default HospitalDetails;
