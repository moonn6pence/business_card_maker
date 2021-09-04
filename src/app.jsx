import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

function App({ FileUploader, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login className={styles.login} authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker
              className={styles.maker}
              authService={authService}
              FileUploader={FileUploader}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
