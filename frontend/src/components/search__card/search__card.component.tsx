import React, { FunctionComponent } from "react";
import { Icons } from "@/assets/components/export";
import { Utils } from "@utils/export";
import s from "./search__card.module.scss";

export const SearchCard: FunctionComponent = () => {
  return (
    <>
      <div className={s.search__card}>
        <img
          className={s.search__card__avatar}
          src={require("@assets/img/avatar.jpg")}
        />
        <div className={s.search__card__text}>
          <div>
            <b className={s.username}>
              centenario
              <div className={s.verify}>
                <Icons.Verify />
              </div>
            </b>
          </div>
          <div>
            <ul className={s.attach}>
              <li className={s.attach__item}>
                {Utils.numberParser(45000)}
                <Icons.Rating />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
