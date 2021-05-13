// Styles
import "./button.styles.scss";

function Button(props) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`button ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
