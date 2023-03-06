import React, { FunctionComponent, useEffect } from "react";
import s from "./content__controller.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { Icons } from "@assets/components/export";

export const ContentController: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.ContentController);
  const {
    ContentControllerChangeLayout,
    ContentControllerChangeTransform,
    CardDataChangePayload,
  } = useActions();

  useEffect(() => {
    CardDataChangePayload([
      {
        title: "Post title",
        author: "@centenario",
        views: "100",
        type: "post",
      },
      {
        title: "Post title 3123123123",
        author: "@centenario",
        views: "100",
        type: "post",
      },
      {
        title: "Post title 3122222222",
        author: "@centenario",
        views: "1234567",
        type: "post",
      },
    ]);
  }, []);

  return (
    <section className={s.content__control__container}>
      <ul className={s.content__control}>
        <li
          className={`${s.content__control__item} ${
            payload.currentLayout === "posts" &&
            s.content__control__item__active
          }`}
          onMouseLeave={() =>
            ContentControllerChangeTransform(
              payload.currentLayout === "posts" ? 0 : 200
            )
          }
          onMouseMove={() => ContentControllerChangeTransform(0)}
          onClick={() => {
            ContentControllerChangeLayout("posts");
            CardDataChangePayload([
              {
                title: "Post title",
                author: "@centenario",
                views: "100",
                type: "post",
              },
              {
                title: "Post title 3123123123",
                author: "@centenario",
                views: "100",
                type: "post",
              },
              {
                title: "Post title 3122222222",
                author: "@centenario",
                views: 2234567,
                type: "post",
              },
            ]);
          }}
        >
          Публикации
          <Icons.Post
            className={payload.currentLayout !== "posts" ? s.disabled : ""}
          />
        </li>
        <li
          className={`${s.content__control__item} ${
            payload.currentLayout === "broadcast" &&
            s.content__control__item__active
          }`}
          onMouseLeave={() =>
            ContentControllerChangeTransform(
              payload.currentLayout === "broadcast" ? 200 : 0
            )
          }
          onMouseMove={() => ContentControllerChangeTransform(200)}
          onClick={() => {
            ContentControllerChangeLayout("broadcast");
            CardDataChangePayload([
              {
                title: "Broadcast title",
                author: "@centenario",
                views: "100",
                type: "broadcast",
              },
              {
                title: "Broadcast title 3123123123",
                author: "@centenario",
                views: "100",
                type: "broadcast",
              },
              {
                title: "Broadcast title 3122222222",
                author: "@centenario",
                views: 200000,
                type: "broadcast",
              },
            ]);
          }}
        >
          Эфиры
          <Icons.Broadcast
            className={payload.currentLayout !== "broadcast" ? s.disabled : ""}
          />
        </li>
        <div
          className={s.content__control__line}
          style={{ transform: `translateX(${payload.transform}px)` }}
        />
      </ul>
    </section>
  );
};
