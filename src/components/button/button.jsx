import React, { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ onClick, name }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
});

export default Button;
