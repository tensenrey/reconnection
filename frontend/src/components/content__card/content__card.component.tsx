import React, { FunctionComponent } from "react";
import s from "./content__card.module.scss";
import { Icons } from "@/assets/components/export";
import { Utils } from "@utils/export";
import { CoreTypes } from "@/@types/namespaces";

export const ContentCard: FunctionComponent<CoreTypes.Card.IContentCard> = ({
  card,
}) => (
  <div className={s.card}>
    <div className={s.card__layout}>
      <div className={s.card__navigation}>
        <div className={s.card__navigation__meta}>
          <div className={s.card__owner__avatar}></div>
          <div className={s.card__owner__meta}>
            <span className={s.card__owner}>{card.author}</span>
            <span className={s.card__date}>1 hour ago</span>
          </div>
        </div>
        <div className={s.card__actions}><Icons.Ellipsis /></div>
      </div>
      <div className={s.card__content__layout}>
        <h2 className={s.card__content__title}>{card.title}</h2>
        <div className={s.card__content__video} />
        <div className={s.card__description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          fugiat, repellendus expedita voluptate ratione facilis. Reiciendis
          obcaecati excepturi vero nisi enim accusantium nostrum laborum.
        </div>
      </div>
      <hr className={s.card__line} />
      <div className={s.card__user__actions}>
        <button className={s.card__user__action}>
          <div className={s.commented__user__list}>
            <div className={s.commented__user__avatar} />
            <div className={s.commented__user__avatar} />
            <div className={s.commented__user__avatar} />
          </div>
          32 comments
        </button>
        <div className={s.card__views}>
          {Utils.numberParser(card.views)}
          <Icons.Views />
        </div>
      </div>
    </div>
  </div>
);
