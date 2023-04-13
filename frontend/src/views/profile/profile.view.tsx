import React, { FunctionComponent } from "react";
import s from "./profile.module.scss";
import { Layout } from "@layouts/export";
import { Component } from "@components/export";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { CoreTypes } from "@/@types/namespaces";
import { Interception } from "@/interceptions/export";

interface IPersonCard {
  data: CoreTypes.User.IUserSource;
}

const ProfileContent: FunctionComponent<IPersonCard> = ({ data }) => {
  const payload = useTypedSelector((state) => state.CardData);

  return (
    <Layout.ResponsiveNavbar>
      <section className={s.main}>
        <Component.PersonCard data={data} />
        <Component.ContentController />
        <section className={s.card__container}>
          {payload.data.length > 0 ? (
            payload.data.map((el: CoreTypes.Card.ICardData, index: number) => (
              <Component.ContentCard key={index} card={el} />
            ))
          ) : (
            <p className={s.card__content__notfound}>
              User hasn't uploaded anything yet
            </p>
          )}
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};

export const Profile: FunctionComponent = () => {
  return <Interception.Profile component={ProfileContent} />;
};
