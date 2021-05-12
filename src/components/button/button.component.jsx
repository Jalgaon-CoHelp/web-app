// Styles
import "./button.styles.scss";

function Button({ type, design, onClick, children, disabled, className }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button ${design} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
