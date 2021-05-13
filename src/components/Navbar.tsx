import React, { useState } from "react";

// Styles
import "../styles/navbar/navbar.styles.scss";

import CoHelpLogo from "../images/CohelpLogo.png";

import { Link } from "react-router-dom";

import Button from "../components/button/button.component";
import NavBarMobile from "../components/top-nav-menu-mobile/top-nav-menu.component";

const NavBar: React.FC = () => {
  const [menuVisible, setMenuVisibility] = useState<boolean>(false);

  return (
    <div className="navbar-container">
      {menuVisible && <NavBarMobile />}
      <Link to="/">
        <img className="logo" src={CoHelpLogo} alt="" />
      </Link>

      <div className="nav-links">
        <Link to="/">Hospitals</Link>
        <Link to="/requested-resources">Requested Resources</Link>
        <Link to="/supplied-resources">Supplied Resources</Link>
      </div>
      <div className="actions">
        <Link to="/add-resources">
          <Button className="primary">Add Supplier</Button>
        </Link>
        <Link to="/request-resources">
          <Button className="inverted">Request Help</Button>
        </Link>
        <Link to="/login">
          <Button className="secondary">Login</Button>
        </Link>
      </div>
      <div className="open-nav-menu">
        <Button
          className="inverted"
          onClick={() => {
            setMenuVisibility(!menuVisible);
          }}
        >
          More Services
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
