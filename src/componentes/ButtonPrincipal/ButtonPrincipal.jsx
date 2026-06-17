import styles from "./ButtonPrincipal.module.css";

const ButtonPrincipal = ({ children, lg }) => {
  return (
    <button className={`${styles.botaoLer} ${lg ? styles.lg : ""}`}>
      {children}
    </button>
  );
};

export default ButtonPrincipal;
