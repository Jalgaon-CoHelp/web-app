import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateHospitalBedsRequestAction } from "../redux/hospital/actions";
import { HospitalState } from "../redux/hospital/types";
import { AppState } from "../redux/store";
import { HospitalPropType } from "./types";

const HospitalEdit = ({
  showModal,
  handleClose,
  hospital,
}: {
  showModal: boolean;
  handleClose: Function;
  hospital: HospitalPropType;
}) => {
  const [oxygen, setOxygen] = useState<number>(Number(hospital.bed.oxygen));
  const [general, setGeneral] = useState<number>(Number(hospital.bed.general));
  const [icu, setIcu] = useState<number>(Number(hospital.bed.icu));
  const [ventilator, setVentilator] = useState<number>(
    Number(hospital.bed.ventilator)
  );
  const [oxygenInvalid, setOxygenInvalid] = useState<boolean>(false);
  const [generalInvalid, setGeneralInvalid] = useState<boolean>(false);
  const [icuInvalid, setIcuInvalid] = useState<boolean>(false);
  const [ventilatorInvalid, setVentilatorInvalid] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (oxygen < 0) {
      setOxygenInvalid(true);
    } else if (general < 0) {
      setGeneralInvalid(true);
    } else if (icu < 0) {
      setIcuInvalid(true);
    } else if (ventilator < 0) {
      setVentilatorInvalid(true);
    } else {
      const beds = hospital.bed;
      if (
        oxygen !== beds.oxygen ||
        general !== beds.general ||
        icu !== beds.icu ||
        ventilator !== beds.ventilator
      ) {
        dispatch(
          updateHospitalBedsRequestAction({
            id: hospital.id,
            general,
            oxygen,
            icu,
            ventilator,
            closeModal: handleClose,
          })
        );
      } else {
        handleClose();
      }
    }
  };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{hospital.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>General</Form.Label>
            <Form.Control
              type="number"
              placeholder="General"
              value={general}
              isInvalid={generalInvalid}
              onChange={(event) => setGeneral(Number(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              Enter valid bed count
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Oxygen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Oxygen"
              value={oxygen}
              isInvalid={oxygenInvalid}
              onChange={(event) => setOxygen(Number(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              Enter valid bed count
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ICU</Form.Label>
            <Form.Control
              type="number"
              placeholder="ICU"
              value={icu}
              isInvalid={icuInvalid}
              onChange={(event) => setIcu(Number(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              Enter valid bed count
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Oxygen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ventilator"
              value={ventilator}
              isInvalid={ventilatorInvalid}
              onChange={(event) => setVentilator(Number(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              Enter valid bed count
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HospitalEdit;
