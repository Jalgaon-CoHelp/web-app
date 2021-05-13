// Styles
import "./suggest-auth.styles.scss";

// Router
import { Link } from "react-router-dom";

// Components
import Button from "../button/button.component";

const SuggestAuth = () => {
  return (
    <div className="suggest-auth-container">
      <h5>
        Login or Register as volunteer and provide us helpful information you
        have about hospitals
      </h5>

      <Link to="/register">
        <Button className="inverted">Register as Volunteer</Button>
      </Link>
      <Link to="/login">
        <Button className="secondary">Login</Button>
      </Link>
    </div>
  );
};

export default SuggestAuth;
