import React, { FunctionComponent } from "react";
import s from "./redirect.module.scss";

import { Navigate } from "react-router-dom";
import { SpinIcon } from "./spin/spin.icon";

export const Redirect: FunctionComponent = () => (
  <section className={s.redirect__wrapper}>
    <section className={s.redirect__content}>
      <h2 className={s.redirect__title}>please wait redirect in progress...</h2>
      <SpinIcon />
      <Navigate replace to="auth" />
    </section>
  </section>
);
