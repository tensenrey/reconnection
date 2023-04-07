import React, { FunctionComponent } from "react";
import s from "./profile.module.scss";
import { Layout } from "@layouts/export";
import { Component } from "@components/export";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { CoreTypes } from "@/@types/namespaces";
import { Private } from "@/interceptions/export";

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
          {payload.data.map((el: CoreTypes.Card.ICardData, index: number) => (
            <Component.ContentCard key={index} card={el} />
          ))}
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};

export const Profile: FunctionComponent = () => {
  return <Private.ProfileInterception component={ProfileContent} />
}
