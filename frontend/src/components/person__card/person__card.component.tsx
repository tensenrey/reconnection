import React, { FunctionComponent } from "react";
import s from "./person__card.module.scss";
import { useParams } from "react-router-dom";
import { Icons } from "@assets/components/export";
import { Utils } from "@utils/export";

export const PersonCard: FunctionComponent = () => {
  const { username } = useParams();

  return (
    <section className={s.poster}>
      <div className={s.poster__layout}>
        <div className={s.user__group}>
          <div className={s.user__meta__info}>
            <div className={s.avatar__wrapper}>
              <img
                className={s.avatar}
                src={require("@assets/img/avatar.jpg")}
              />
              <div className={s.verify}>
                <Icons.Verify />
              </div>
            </div>
            <div>
              <b className={s.username}>{username}</b>
              <ul className={s.social}>
                <li className={s.social__link}>Subscribe</li>
              </ul>
            </div>
          </div>
          <ul className={s.attach}>
            <li className={s.attach__item}>
              {Utils.numberParser(100000000)}
              <Icons.Followers />
            </li>
            <li className={s.attach__item}>
              {Utils.numberParser(1000)}
              <Icons.Reactions />
            </li>
            <li className={s.attach__item}>
              {Utils.numberParser(45000)}
              <Icons.Rating />
            </li>
          </ul>
          <p className={s.user__description}>
            Когда мне придет время быть счастливым, я отправлюсь в могилу и
            исполню свой долг.
          </p>
        </div>
      </div>
    </section>
  );
};
