import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header></Header>
      <section className={styles.mainSection}>
        <h1>Login</h1>
        <ul className={styles.providerList}>
          <li className={styles.providerItem}>
            <button className={styles.loginBtn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.providerItem}>
            <button className={styles.loginBtn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
