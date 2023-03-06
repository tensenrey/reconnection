import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Routes, Route, HashRouter } from "react-router-dom";
import { View } from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { Private } from "./private/export";

const AppRouting: FunctionComponent = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<View.Login />} />
      <Route
        path="/@:username"
        element={<Private.GuardRoute children={<View.Main />} />}
      />
      <Route
        path="/channel/:channelID"
        element={<Private.GuardRoute children={<View.Channel />} />}
      />
      <Route
        path="/news"
        element={<Private.GuardRoute children={<View.News />} />}
      />
      <Route path="*" element={<View.Error />} />
    </Routes>
  </HashRouter>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);
