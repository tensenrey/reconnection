import React, { FunctionComponent, useState, useLayoutEffect } from "react";
import s from "./login.module.scss";

import { useNavigate, useLocation } from "react-router-dom";
import { Component } from "@components/export";

export const Login: FunctionComponent = () => {
  const [haveAccount, setHaveAccount] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const sessionHandler = async () => {
    const session = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("secret") }),
    });

    if (session.ok === true) {
      return navigate("/@tensenrey");
    }

    localStorage.clear();
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("secret") !== null) {
      sessionHandler();
    }
  }, [location]);

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
