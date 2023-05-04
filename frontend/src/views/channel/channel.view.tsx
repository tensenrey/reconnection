import React, { FunctionComponent } from "react";
import { Layout } from "@layouts/export";
import s from "./channel.module.scss";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { Icons } from "@assets/components/export";
import { Link } from "react-router-dom";
import { Interception } from "@/interceptions/export";
import { CoreTypes } from "@/@types/namespaces";

const ChannelLayout: FunctionComponent = () => {
  const payload = useTypedSelector((state) => ({
    channel: state.Channel,
    user: state.User,
  }));

  return (
    <section className={s.channel__backdrop}>
      <Layout.Responsive>
        <>
          <div className={s.channel__actions}>
            <Link
              to={`/${payload.user.user.id}`}
              className={s.channel__action__button}
            >
              <Icons.BackArrow />
            </Link>
            <h2 className={s.channel__title}>Broadcast title</h2>
          </div>
          <section className={s.channel__wrapper}>
            <section className={s.channel__list}>
              {payload.channel.sockets.map((socket: CoreTypes.Channel.IChannelClient) => {
                return (
                  <div className={s.channel__stream} key={socket.id}>
                    <div className={s.channel__stream__avatar}></div>
                    <p className={s.channel__stream__user}>@{socket.id}</p>
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

export const Channel: FunctionComponent = () => {
  return (<Interception.Channel component={ChannelLayout}/>);
};
