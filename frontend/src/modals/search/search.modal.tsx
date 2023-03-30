import React, { FunctionComponent } from "react";
import s from "./search__modal.module.scss";
import { Layout } from "@layouts/export";
import { Icons } from "@assets/components/export";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useActions } from "@hooks/redux.useActions";
import { Component } from "@components/export";

export const Search: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.SearchModal);
  const { SearchModalChangeShow } = useActions();
  return (
    <>
      {payload.show && (
        <div className={s.backdrop}>
          <Layout.Responsive>
            <>
              <div className={s.search__container}>
                <input
                  className={s.search__input}
                  placeholder="Search"
                  type="text"
                  autoFocus
                />
                <div onClick={() => SearchModalChangeShow(false)}>
                  <Icons.Close className={s.close__icon} />
                </div>
              </div>
              <section className={s.searched__container}>
                <div className={s.searched__actions__container}>
                  <ul className={s.searched__actions}>
                    <li className={s.searched__action}>Пользователи</li>
                    <li className={s.searched__action}>Эфиры</li>
                    <li className={s.searched__action}>Посты</li>
                  </ul>
                </div>
                <div>
                  <ul className={s.search__cards__list}>
                    <li>
                      <Component.SearchCard />
                    </li>
                    <li>
                      <Component.SearchCard />
                    </li>
                    <li>
                      <Component.SearchCard />
                    </li>
                    <li>
                      <Component.SearchCard />
                    </li>
                    <li>
                      <Component.SearchCard />
                    </li>
                  </ul>
                </div>
              </section>
            </>
          </Layout.Responsive>
        </div>
      )}
    </>
  );
};
