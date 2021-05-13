// Styles
import "./suggest-auth.styles.scss";

// Components
import Button from "../button/button.component";

const SuggestAuth = () => {
  return (
    <div className="suggest-auth-container">
      <h5>
        Login or Register as volunteer and provide us helpful information you
        have about hospitals
      </h5>
      <Button className="inverted">Register as Volunteer</Button>
      <Button className="secondary">Login</Button>
    </div>
  );
};

export default SuggestAuth;
