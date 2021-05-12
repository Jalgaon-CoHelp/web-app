// Styles
import "./button.styles.scss";

function Button({ type, onClick, children, disabled, className }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
