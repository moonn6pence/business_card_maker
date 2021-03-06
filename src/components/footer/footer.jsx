import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <span className={styles.desc}>Make your own digital business cards!</span>
      <span className={styles.desc}>Code by mxxnN6ixpence</span>
    </footer>
  );
});

export default Footer;
