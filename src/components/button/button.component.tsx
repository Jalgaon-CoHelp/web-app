// Styles
import "./button.styles.scss";

interface IProps {
  type?: any;
  disabled?: boolean;
  onClick?: any;
  className: any;
  children: any;
}

function Button(props: IProps) {
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
