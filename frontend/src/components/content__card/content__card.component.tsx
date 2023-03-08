import React, { FunctionComponent } from "react";
import s from "./content__card.module.scss";
import { Icons } from "@/assets/components/export";
import { Utils } from "@utils/export";
import { CoreTypes } from "@/@types/namespaces";

export const ContentCard: FunctionComponent<CoreTypes.Card.IContentCard> = ({
  card,
}) => (
  <div className={s.card}>
    <div className={s.card__poster}></div>
    <b className={s.card__title}>{card.title}</b>
    <span className={s.card__meta}>
      <p className={s.card__author}>{card.author}</p>
      <span className={s.card__views}>
        {Utils.numberParser(card.views)}
        <Icons.Views />
      </span>
    </span>
  </div>
);
