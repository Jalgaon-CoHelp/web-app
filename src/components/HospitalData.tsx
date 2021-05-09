import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Hospital as HospitalType } from "../redux/hospital/types";
import BedCount from "./BedCount";
import { HospitalPropsType } from "./types";
import {
  faBed,
  faLungs,
  faLaptopMedical,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import HospitalDetails from "./HospitalDetails";

const HospitalData: React.FC<HospitalPropsType> = ({
  total,
  hospitals,
  isLoading,
}: HospitalPropsType) => {
  return (
    <Container fluid>
      <div className="justify-content-start h5">Total: {total}</div>
      <Row className="mb-3">
        {hospitals.map((hospital: HospitalType, index: number) => {
          if (index % 2 === 0) {
            return (
              <Col lg={6} md={6} sm={12} xs={12} className="mt-3" key={index}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <HospitalDetails
                          name={hospital.name}
                          address={hospital.address}
                          taluka={hospital.taluka.name}
                          contact1={hospital.contact1}
                          contact2={hospital.contact2}
                          updatedAt={hospital.updatedAt}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faBed}
                          count={hospital.beds.general}
                          type="General"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faLungs}
                          count={hospital.beds.oxygen}
                          type="Oxygen"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faHospital}
                          count={hospital.beds.icu}
                          type="ICU"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faLaptopMedical}
                          count={hospital.beds.ventilator}
                          type="Ventilator"
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
                <Card className="shadow-sm">
                  <Card.Body>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <HospitalDetails
                          name={hospital.name}
                          address={hospital.address}
                          taluka={hospital.taluka.name}
                          contact1={hospital.contact1}
                          contact2={hospital.contact2}
                          updatedAt={hospital.updatedAt}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faBed}
                          count={hospital.beds.general}
                          type="General"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faLungs}
                          count={hospital.beds.oxygen}
                          type="Oxygen"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faHospital}
                          count={hospital.beds.icu}
                          type="ICU"
                        />
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={6}>
                        <BedCount
                          icon={faLaptopMedical}
                          count={hospital.beds.ventilator}
                          type="Ventilator"
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

export default HospitalData;
