// Styles
import "./top-nav-menu.styles.scss";

// Router
import { Link } from "react-router-dom";

// Redux
import { AppState } from "../../redux/store";
import { UserState } from "../../redux/user/types";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequestAction } from "../../redux/user/actions.";

// Component
import Button from "../button/button.component";

interface props {
  closeMenu: any;
}

const NavMenuMobile = ({ closeMenu }: props) => {
  // Redux
  const dispatch = useDispatch();
  const { userInfo }: UserState = useSelector((state: AppState) => state.user);

  // Member Functions
  const handleLogout = () => {
    dispatch(userLogoutRequestAction());
  };

  return (
    <div className="top-nav-menu-mobile" onClick={closeMenu}>
      <Link to="/">Hospitals</Link>
      <Link to="/requested-resources">Requested Resources</Link>
      <Link to="/supplied-resources">Supplied Resources</Link>
      <div>
        <Link to="/add-resources">
          <Button className="primary">Add Supplier</Button>
        </Link>
        <Link to="/request-resources">
          <Button className="inverted">Request Help</Button>
        </Link>
        {userInfo.name ? (
          <Button className="secondary" onClick={handleLogout}>
            Log out
          </Button>
        ) : (
          <Link to="/login">
            <Button className="secondary">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavMenuMobile;
