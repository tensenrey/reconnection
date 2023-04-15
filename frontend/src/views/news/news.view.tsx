import React, { FunctionComponent } from "react";
import s from "./news.module.scss";

import { Layout } from "@/layouts/export";
import { Component } from "@/components/export";
import { CoreTypes } from "@/@types/namespaces";

export const News: FunctionComponent = () => {
  const cards: CoreTypes.Card.ICardData[] = [
    {
      title: "Awesome title",
      author: "me1",
      views: 1,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
    {
      title: "Awesome title",
      author: "me2",
      views: 2,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
    {
      title: "Awesome title",
      author: "me3",
      views: 3,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
    {
      title: "Awesome title",
      author: "me4",
      views: 4,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
        {
      title: "Awesome title",
      author: "me3",
      views: 3,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
    {
      title: "Awesome title",
      author: "me4",
      views: 4,
      id: "3123",
      type: CoreTypes.Card.CardType.broadcast,
    },
  ];
  return (
    <Layout.ResponsiveNavbar>
      <section className={s.card__wrapper}>
        <h3>News</h3>
        <section className={s.card__container}>
          {cards.map((el) => (
            <Component.ContentCard
              card={el}
              key={el.views + el.author + Math.random()}
            />
          ))}
        </section>
        <section>
          <h3>Broadcasts today</h3>
          <section className={s.card__container}>
            {cards.map((el) => (
              <Component.ContentCard
                card={el}
                key={el.views + el.author + Math.random()}
              />
            ))}
          </section>
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};
