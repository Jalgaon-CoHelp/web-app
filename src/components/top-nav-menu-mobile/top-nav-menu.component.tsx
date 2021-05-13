// Styles
import "./top-nav-menu.styles.scss";

// Router
import { Link } from "react-router-dom";

// Component
import Button from "../button/button.component";

const NavMenuMobile: React.FC = () => {
  return (
    <div className="top-nav-menu-mobile">
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
        <Link to="/login">
          <Button className="secondary">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavMenuMobile;
