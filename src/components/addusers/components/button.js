import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      style={props.style}
    >
      {props.label}
    </button>
  );
};
export default Button;
