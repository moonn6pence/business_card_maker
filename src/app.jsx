import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login className={styles.modal} authService={authService} />
    </div>
  );
}

export default App;
