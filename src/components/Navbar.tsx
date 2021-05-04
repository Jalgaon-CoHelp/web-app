import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
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
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false),
    history = useHistory(),
    toggle = () => setIsOpen(!isOpen);

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
          <Nav.Link>
            <LinkContainer to="/">
              <NavLink>
                <FontAwesomeIcon
                  icon={faProcedures}
                  style={{ marginRight: "0.5rem" }}
                />
                Hospital
              </NavLink>
            </LinkContainer>
          </Nav.Link>
          <Nav.Link>
            <LinkContainer to="/resources">
              <NavLink>
                <FontAwesomeIcon
                  icon={faMedkit}
                  style={{ marginRight: "0.5rem" }}
                />
                Resources
              </NavLink>
            </LinkContainer>
          </Nav.Link>
          <Nav.Link>
            <Button onClick={() => history.push("/add-supplier")}>
              <FontAwesomeIcon
                icon={faPeopleCarry}
                style={{ marginRight: "0.5rem" }}
              />
              Add Supplier
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button onClick={() => history.push("/request-resource")}>
              <FontAwesomeIcon
                icon={faHandPaper}
                style={{ marginRight: "0.5rem" }}
              />
              Request For Help
            </Button>
          </Nav.Link>
        </Nav>
        {/* <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav> */}
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
