import React, { FunctionComponent } from "react";
import s from "./redirect.module.scss";
import { SpinIcon } from "./spin/spin.icon";
import { CoreTypes } from "@/@types/namespaces";

export const Redirect: FunctionComponent<
  CoreTypes.Redirect.IRedirectPayload
> = ({ children }) => (
  <section className={s.redirect__wrapper}>
    <section className={s.redirect__content}>
      <h2 className={s.redirect__title}>please wait redirect in progress...</h2>
      <SpinIcon />
      {children || null}
    </section>
  </section>
);
