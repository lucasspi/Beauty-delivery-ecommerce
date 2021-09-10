import React from "react";
import { Provider } from "react-redux";

import { Home } from "./home";

import store from "../store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
