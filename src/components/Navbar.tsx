import React, { useState } from "react";
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
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
    <BootstrapNavbar light expand="md" className="custom-navbar">
      <LinkContainer to="/">
        <NavbarBrand>
          <img src={CoHelpLogo} alt="logo" />
        </NavbarBrand>
      </LinkContainer>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto nav-bar-link-list" navbar>
          <NavItem>
            <LinkContainer to="/">
              <NavLink>
                <FontAwesomeIcon
                  icon={faProcedures}
                  style={{ marginRight: "0.5rem" }}
                />
                Hospital
              </NavLink>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/resources">
              <NavLink>
                <FontAwesomeIcon
                  icon={faMedkit}
                  style={{ marginRight: "0.5rem" }}
                />
                Resources
              </NavLink>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <Button onClick={() => history.push("/add-supplier")}>
              <FontAwesomeIcon
                icon={faPeopleCarry}
                style={{ marginRight: "0.5rem" }}
              />
              Add Supplier
            </Button>
          </NavItem>
          <NavItem>
            <Button onClick={() => history.push("/request-resource")}>
              <FontAwesomeIcon
                icon={faHandPaper}
                style={{ marginRight: "0.5rem" }}
              />
              Request For Help
            </Button>
          </NavItem>
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
      </Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
