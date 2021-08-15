import React from "react";
import styles from "./preview.module.css";

const Preview = (props) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        <li className={styles.card}></li>
      </ul>
    </section>
  );
};

export default Preview;
