import React, { FunctionComponent, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import s from "./navbar.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@/hooks/redux.useTypedSelector";
import { Utils } from "@/utils/export";
import { useUserQuery } from "@/store/slices/api/user.api";

export const Navbar: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.User);
  const { SearchModalChangeShow } = useActions();

  const jwt = Utils.JWTDecoder(localStorage.getItem("secret")!);
  const { UserSetPayload } = useActions();
  const { data } = useUserQuery(jwt.id);

  useLayoutEffect(() => {
    if (data !== undefined) {
      UserSetPayload(data);
    }
  }, [data]);

  return (
    <>
      <Link to="/channel/a1">
        <div className={s.call__line} />
      </Link>
      <header className={s.navbar}>
        <div className={s.navbar__wrapper}>
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
            <div></div>
            <div></div>
            <div></div>
            <span>
              <Link to={`/${payload?.user.id}`} className={s.username}>
                {payload.user?.avatar !== null && (
                  <img className={s.avatar} src={payload.user.avatar} />
                )}
                {payload.user?.username && (
                  <div className={s.avatar}>{payload.user?.username![0]}</div>
                )}
              </Link>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
