import React, { FunctionComponent, useLayoutEffect } from "react";
import s from "./person__card.module.scss";
import { useUserQuery } from "@/store/slices/api/user.api";
import { Icons } from "@assets/components/export";
import { Utils } from "@utils/export";
import { useActions } from "@/hooks/redux.useActions";

export const PersonCard: FunctionComponent = () => {
  const jwt = Utils.JWTDecoder(localStorage.getItem("secret")!);
  const { UserSetPayload } = useActions();
  const { data } = useUserQuery(jwt.id);

  useLayoutEffect(() => {
    if (data !== undefined) {
      UserSetPayload(data);
    }
  }, [data]);

  return (
    <section className={s.poster}>
      <div className={s.poster__layout}>
        <div className={s.user__group}>
          <div className={s.user__meta__info}>
            <div className={s.avatar__wrapper}>
              {data?.avatar ? <img className={s.avatar} src={data.avatar} /> : <div className={s.avatar}>{data?.username![0]}</div>}
              <div className={s.verify}>
                <Icons.Verify />
              </div>
            </div>
            <div>
              <b className={s.username}>{data?.username}</b>
              <ul className={s.social}>
                <li className={s.social__link}>subscribe</li>
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
            {/* Когда мне придет время быть счастливым, я отправлюсь в могилу и
            исполню свой долг. */}
            {data?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
