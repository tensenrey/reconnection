import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { View } from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { Interception } from "./interceptions/export";

const AppRouting: FunctionComponent = () => (
  <Routes>
    <Route path="/auth" element={<View.Login />} />
    <Route
      path="/:id"
      element={<Interception.Guard component={View.Profile} />}
    />
    <Route
      path="/channel/:channelID"
      element={<Interception.Guard component={View.Channel} />}
    />
    <Route
      path="/news"
      element={<Interception.Guard component={View.News} />}
    />
    <Route
      path="*"
      element={<View.Redirect children={<Navigate replace to="auth" />} />}
    />
    <Route path="notfound" element={<Interception.Guard component={View.NotFound} />} />
  </Routes>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <HashRouter>
      <AppRouting />
    </HashRouter>
  </Provider>
);
