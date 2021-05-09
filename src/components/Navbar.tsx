import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavLink,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CoHelpLogo from "../images/CohelpLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProcedures,
  faMedkit,
  faPeopleCarry,
  faHandPaper,
  faSignInAlt,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <BootstrapNavbar bg="light" expand="lg" className="custom-navbar">
      <LinkContainer to="/">
        <BootstrapNavbar.Brand>
          <img src={CoHelpLogo} alt="logo" />
        </BootstrapNavbar.Brand>
      </LinkContainer>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="mr-auto nav-bar-link-list" navbar>
          <Nav.Item>
            <LinkContainer to="/">
              <NavLink>
                <FontAwesomeIcon
                  icon={faProcedures}
                  style={{ marginRight: "0.5rem" }}
                />
                Hospital
              </NavLink>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/resources">
              <NavLink>
                <FontAwesomeIcon
                  icon={faMedkit}
                  style={{ marginRight: "0.5rem" }}
                />
                Resources
              </NavLink>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={() => history.push("/add-resources")}>
              <FontAwesomeIcon
                icon={faPeopleCarry}
                style={{ marginRight: "0.5rem" }}
              />
              Add Supplier
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={() => history.push("/request-resources")}>
              <FontAwesomeIcon
                icon={faHandPaper}
                style={{ marginRight: "0.5rem" }}
              />
              Request For Help
            </Button>
          </Nav.Item>
        </Nav>
        <Nav.Item className="m-1">
        <Button onClick={() => history.push("/volunteerRegister")}>
          <FontAwesomeIcon
            icon={faHandsHelping}
            style={{ marginRight: "0.5rem" }}
          />
          Be volunteer with us
        </Button>
      </Nav.Item>
      <Nav.Item className="m-1">
        <Button onClick={() => history.push("/login")}>
          <FontAwesomeIcon
            icon={faSignInAlt}
            style={{ marginRight: "0.5rem" }}
          />
          Login
        </Button>
      </Nav.Item>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
