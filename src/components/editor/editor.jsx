import React from "react";
import styles from "./editor.module.css";

const Editor = (props) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Edit Card</h1>
      <ul className={styles.cards}>
        <li className={styles.card}></li>
      </ul>
    </section>
  );
};

export default Editor;
