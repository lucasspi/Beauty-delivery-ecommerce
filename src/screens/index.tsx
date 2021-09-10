import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./home";
import store from "../store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route path="/" render={() => <Home />} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};
