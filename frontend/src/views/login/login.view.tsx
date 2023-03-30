import React, { FunctionComponent, useState } from "react";
import s from "./login.module.scss";
import { Component } from "@components/export";

export const Login: FunctionComponent = () => {
  const [haveAccount, setHaveAccount] = useState<boolean>(true);
  return (
    <section className={s.form__layout}>
      {haveAccount ? (
        <Component.SignInForm changeMode={setHaveAccount} />
      ) : (
        <Component.SignUpForm changeMode={setHaveAccount} />
      )}
    </section>
  );
};
