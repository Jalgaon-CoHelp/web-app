import React, { useState } from "react";

// Styles
import "../styles/navbar/navbar.styles.scss";

// Assets
import CoHelpLogo from "../images/CohelpLogo.png";

// Router
import { Link } from "react-router-dom";

// Redux
import { AppState } from "../redux/store";
import { UserState } from "../redux/user/types";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequestAction } from "../redux/user/actions.";

import Button from "../components/button/button.component";
import NavBarMobile from "../components/top-nav-menu-mobile/top-nav-menu.component";

const NavBar: React.FC = () => {
  // State
  const [menuVisible, setMenuVisibility] = useState<boolean>(false);

  // Redux
  const dispatch = useDispatch();
  const { userInfo }: UserState = useSelector((state: AppState) => state.user);

  // Member Functions
  const toggleMenu = () => {
    setMenuVisibility(!menuVisible);
  };
  const closeMenu = () => {
    setMenuVisibility(false);
  };
  const handleLogout = () => {
    dispatch(userLogoutRequestAction());
  };

  const openNavBtnText = menuVisible ? "Close" : "Menu";

  // Render
  return (
    <div className="navbar-container">
      {menuVisible && <NavBarMobile closeMenu={closeMenu} />}
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
        {userInfo.name && (
          <Button className="secondary" onClick={handleLogout}>
            Log out
          </Button>
        )}
      </div>
      <div className="open-nav-menu">
        <Button className="inverted" onClick={toggleMenu}>
          {openNavBtnText}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
