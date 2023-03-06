import React, { FunctionComponent } from "react";
import { Layout } from "@layouts/export";
import s from "./channel.module.scss";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { Icons } from "@assets/components/export";
import { Link } from "react-router-dom";

export const Channel: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.Channel);

  return (
    <section className={s.channel__backdrop}>
      <Layout.Responsive>
        <>
          <div className={s.channel__actions}>
            <Link to={"/@centenario"} className={s.channel__action__button}>
              <Icons.BackArrow />
            </Link>
            <h2 className={s.channel__title}>Broadcast title</h2>
          </div>
          <section className={s.channel__wrapper}>
            <section className={s.channel__list}>
              {payload.sockets.map((el: any) => {
                return (
                  <div className={s.channel__stream} key={el.socket}>
                    <div className={s.channel__stream__avatar}></div>
                    <p className={s.channel__stream__user}>@{el.socket}</p>
                  </div>
                );
              })}
            </section>
          </section>
        </>
      </Layout.Responsive>
    </section>
  );
};
