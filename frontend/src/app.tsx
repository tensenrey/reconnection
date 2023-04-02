import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { View } from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { Private } from "./private/export";

const AppRouting: FunctionComponent = () => (
  <Routes>
    <Route path="/auth" element={<View.Login />} />
    <Route
      path="/@:username"
      element={<Private.GuardedRoute component={View.Main} />}
    />
    <Route
      path="/channel/:channelID"
      element={<Private.GuardedRoute component={View.Channel} />}
    />
    <Route
      path="/news"
      element={<Private.GuardedRoute component={View.News} />}
    />
    <Route
      path="*"
      element={<View.Redirect children={<Navigate replace to="auth" />} />}
    />
  </Routes>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <HashRouter>
      <AppRouting />
    </HashRouter>
  </Provider>
);
