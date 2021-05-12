import React from "react";

// Styles
import "../styles/navbar/navbar.styles.scss";

import {
  Navbar as BootstrapNavbar,
  Nav,
  NavLink,
  // Button,
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
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, Link } from "react-router-dom";
import { AppState } from "../redux/store";
import { UserState } from "../redux/user/types";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequestAction } from "../redux/user/actions.";

import Button from "../components/button/button.component";

const NavBar: React.FC = () => {
  return (
    <div className="navbar-container">
      <img className="logo" src={CoHelpLogo} alt="" />
      <div className="nav-links">
        <Link to="/">Hospitals</Link>
        <Link to="/requested-resources">Requested Resources</Link>
        <Link to="/supplied-resources">Supplied Resources</Link>
      </div>
      <div className="actions">
        <Button
          type="submit"
          disabled={false}
          className="primary"
          onClick={() => {}}
        >
          Add Supplier
        </Button>
        <Button
          type="submit"
          disabled={false}
          className="inverted"
          onClick={() => {}}
        >
          Request Help
        </Button>

        <Button
          type="submit"
          disabled={false}
          className="secondary"
          onClick={() => {}}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

// const NavBar: React.FC = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { userInfo }: UserState = useSelector((state: AppState) => state.user);

//   const handleLogout = () => {
//     dispatch(userLogoutRequestAction());
//   };
//   return (
//     <>
//       <Button
//         type="submit"
//         disabled={false}
//         className="secondary"
//         onClick={() => {}}
//       >
//         Already Have an Account
//       </Button>
//       <BootstrapNavbar
//         collapseOnSelect
//         bg="light"
//         expand="lg"
//         className="custom-navbar"
//       >
//         <LinkContainer to="/">
//           <BootstrapNavbar.Brand>
//             <img src={CoHelpLogo} alt="logo" />
//           </BootstrapNavbar.Brand>
//         </LinkContainer>
//         <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
//         <BootstrapNavbar.Collapse id="navbar-nav">
//           <Nav className="mr-auto nav-bar-link-list" navbar>
//             <Nav.Item style={{ marginRight: "1.5rem" }}>
//               <LinkContainer to="/">
//                 <NavLink>
//                   <FontAwesomeIcon
//                     icon={faProcedures}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   Hospitals
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//             <Nav.Item style={{ marginRight: "1.5rem" }}>
//               <LinkContainer to="/requested-resources">
//                 <NavLink>
//                   <FontAwesomeIcon
//                     icon={faMedkit}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   Requested Resources
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//             <Nav.Item style={{ marginRight: "1.5rem" }}>
//               <LinkContainer to="/supplied-resources">
//                 <NavLink>
//                   <FontAwesomeIcon
//                     icon={faHandHoldingMedical}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   Supplied Resources
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//             <Nav.Item>
//               <LinkContainer to="/add-resources">
//                 <NavLink>
//                   {/* <Button>
//                     <FontAwesomeIcon
//                       icon={faPeopleCarry}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     Add Supplier
//                   </Button> */}
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//             <Nav.Item>
//               <LinkContainer to="/request-resources">
//                 <NavLink>
//                   {/* <Button>
//                     <FontAwesomeIcon
//                       icon={faHandPaper}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     Request For Help
//                   </Button> */}
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//           </Nav>
//           {userInfo.name && (
//             <Nav.Item>
//               <Dropdown>
//                 <Dropdown.Toggle
//                   variant="success"
//                   id="dropdown-basic"
//                   className="text-secondary"
//                 >
//                   <FontAwesomeIcon
//                     icon={faUser}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   Hello, {userInfo.name}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   {/* <Button
//                     variant="secondary text-secondary"
//                     onClick={() => handleLogout()}
//                   >
//                     <FontAwesomeIcon
//                       icon={faSignOutAlt}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     Logout
//                   </Button> */}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav.Item>
//           )}
//         </BootstrapNavbar.Collapse>
//       </BootstrapNavbar>
//       <Nav
//         className="ml-auto nav-bar-link-list justify-content-center m-3"
//         navbar
//       >
//         {!userInfo.name && (
//           <>
//             <Nav.Item>
//               <LinkContainer to="/volunteer">
//                 <NavLink>
//                   {/* <Button>
//                     <FontAwesomeIcon
//                       icon={faHandsHelping}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     Register to Be a volunteer
//                   </Button> */}
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//             <Nav.Item>
//               <LinkContainer to="/login">
//                 <NavLink>
//                   {/* <Button onClick={() => history.push("/login")}>
//                     <FontAwesomeIcon
//                       icon={faSignInAlt}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     Login
//                   </Button> */}
//                 </NavLink>
//               </LinkContainer>
//             </Nav.Item>
//           </>
//         )}
//       </Nav>
//     </>
//   );
// };

export default NavBar;
