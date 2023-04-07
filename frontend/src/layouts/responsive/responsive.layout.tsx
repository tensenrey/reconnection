import React, { FunctionComponent } from "react";
import s from "./responsive.module.scss";
import { Component } from "@components/export";
import { Modals } from "@modals/export";
import { CoreTypes } from "@/@types/namespaces";

export const Responsive: FunctionComponent<
  CoreTypes.Layouting.IResponsiveLayout
> = ({ children }) => (
  <>
    <section className={s.layout}>
      <section className={s.responsive}>{children}</section>
    </section>
  </>
);

export const ResponsiveNavbar: FunctionComponent<
  CoreTypes.Layouting.IResponsiveLayout
> = ({ children }) => (
  <>
    <Component.Navbar />
    <Responsive>
      <>
        <Modals.Search />
        {children}
      </>
    </Responsive>
  </>
);
