import React from "react";
import {
  faMapMarkerAlt,
  faPhone,
  faCity,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Col, Row } from "react-bootstrap";
import moment from "moment";
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
      <p className="text-secondary">
        <FontAwesomeIcon className="mr-2" icon={faCity} />
        <Badge className="badge-city">{taluka}</Badge>
      </p>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            <Badge className="badge-mobile">
              {contact1 === undefined || contact1 === "" ? "--" : contact1}
            </Badge>
            {contact2 === undefined || contact2 === "" ? (
              ""
            ) : (
              <>
                , <Badge className="badge-mobile">{contact2}</Badge>
              </>
            )}
          </p>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <p className="text-secondary">
            <FontAwesomeIcon className="mr-2" icon={faHistory} />
            <Badge className="badge-updated">
              {moment(updatedAt).fromNow()}
            </Badge>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default HospitalDetails;
