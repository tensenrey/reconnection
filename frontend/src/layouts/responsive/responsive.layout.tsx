import React, { FunctionComponent } from "react";
import s from "./responsive.module.scss";
import { Component } from "@components/export";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
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
> = ({ children }) => {
  const payload = useTypedSelector((state) => state.SearchModal);
  return (
    <>
      <Component.Navbar />
      <Responsive>
        <>
          <Modals.Search />
          <div style={payload.show ? { opacity: 0.1 } : {}}>{children}</div>
        </>
      </Responsive>
    </>
  );
};
