import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import s from "./navbar.module.scss";
import { useActions } from "@hooks/redux.useActions";

export const Navbar: FunctionComponent = () => {
  const { SearchModalChangeShow } = useActions();
  const { username } = useParams();

  return (
    <>
      <Link to="/channel/a1">
        <div className={s.call__line} />
      </Link>
      <header className={s.navbar}>
        <div className={s.navbar__menu}>
          <Link
            to={"/news"}
            className={`${s.navbar__menu__item} ${s.navbar__logo}`}
          >
            reconnection
          </Link>
        </div>
        <div className={s.navigation}>
          <a
            className={`${s.navbar__menu__item} ${s.navbar__menu__input}`}
            onClick={() => SearchModalChangeShow(true)}
          >
            Search
          </a>
        </div>
        <div className={s.user__content}>
          <Link to={`/@${username}`} className={s.username}>
            {"undefined"}
          </Link>
          <img
            className={s.avatar}
            src={require("../../assets/img/avatar.jpg")}
            alt={username}
          />
        </div>
      </header>
    </>
  );
};
