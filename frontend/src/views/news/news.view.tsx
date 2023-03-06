import React, { FunctionComponent } from "react";
import { Layout } from "@/layouts/export";

export const News: FunctionComponent = () => {
  return (
    <Layout.ResponsiveNavbar>
      <section>
        <h2>Новости</h2>
        <section>
          <article>1</article>
          <article>2</article>
          <article>3</article>
          <article>4</article>
          <article>1</article>
          <article>2</article>
          <article>3</article>
          <article>4</article>
        </section>
        <section>
          <h2>Эфиры дня</h2>
          <section>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
          </section>
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};
