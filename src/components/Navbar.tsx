import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavLink,
  Button,
  Dropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CoHelpLogo from "../images/CohelpLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProcedures,
  faMedkit,
  faPeopleCarry,
  faHandPaper,
  faHandsHelping,
  faUser,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { AppState } from "../redux/store";
import { UserState } from "../redux/user/types";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequestAction } from "../redux/user/actions.";

const NavBar: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo }: UserState = useSelector((state: AppState) => state.user);

  const handleLogout = () => {
    dispatch(userLogoutRequestAction());
  };
  return (
    <BootstrapNavbar
      collapseOnSelect
      bg="light"
      expand="lg"
      className="custom-navbar"
    >
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
            <LinkContainer to="/add-resources">
              <NavLink>
                <Button>
                  <FontAwesomeIcon
                    icon={faPeopleCarry}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Add Supplier
                </Button>
              </NavLink>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/request-resources">
              <NavLink>
                <Button>
                  <FontAwesomeIcon
                    icon={faHandPaper}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Request For Help
                </Button>
              </NavLink>
            </LinkContainer>
          </Nav.Item>
        </Nav>

        <Nav className="ml-auto nav-bar-link-list" navbar>
          {!userInfo.name && (
            <>
              <Nav.Item className="m-1">
                <LinkContainer to="/volunteer">
                  <NavLink>
                    <Button>
                      <FontAwesomeIcon
                        icon={faHandsHelping}
                        style={{ marginRight: "0.5rem" }}
                      />
                      Be volunteer with us
                    </Button>
                  </NavLink>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item className="m-1">
                <LinkContainer to="/login">
                  <NavLink>
                    <Button onClick={() => history.push("/login")}>
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        style={{ marginRight: "0.5rem" }}
                      />
                      Login
                    </Button>
                  </NavLink>
                </LinkContainer>
              </Nav.Item>
            </>
          )}
          {userInfo.name && (
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="text-secondary"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Hello, {userInfo.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Button
                    variant="secondary text-secondary"
                    onClick={() => handleLogout()}
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      style={{ marginRight: "0.5rem" }}
                    />
                    Logout
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
