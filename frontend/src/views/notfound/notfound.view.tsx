import React, { FunctionComponent } from "react";
import s from "./notfound.module.scss";

import { Layout } from "@/layouts/export";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@/hooks/redux.useTypedSelector";

export const NotFound: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.User);

  return (
    <Layout.ResponsiveNavbar>
      <section className={s.notfound__wrapper}>
        <h2 className={s.notfound__title}>Page not found</h2>
        <Link to={"/" + payload.user.id} className={s.notfound__link}>
          <span className={s.notfound__link__text}>Go to home</span>
          <span className={s.notfound__link__arrow}>→</span>
        </Link>
      </section>
    </Layout.ResponsiveNavbar>
  );
};
