import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userID) => {
    history.push({
      pathname: "/maker",
      state: { id: userID },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });
  return (
    <section className={styles.login}>
      <Header />
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
      <Footer />
    </section>
  );
};

export default Login;
