import React, { FunctionComponent, useState, useLayoutEffect } from "react";
import s from "./login.module.scss";

import { useNavigate, useLocation } from "react-router-dom";
import { Component } from "@components/export";
import { Utils } from "@/utils/export";
import { View } from "@/views/export";

export const Login: FunctionComponent = () => {
  const token = localStorage.getItem("secret");
  const [haveAccount, setHaveAccount] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const sessionHandler = async () => {
    const session = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (session.ok === true) {
      const { id } = Utils.JWTDecoder(token!);
      return navigate(`/${id}`);
    } else {
      setLoading(false);
    }

    localStorage.clear();
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("secret") !== null) {
      sessionHandler();
    } else {
      setLoading(false);
    }
  }, [location]);

  return (
    <>
      {
        loading ? <View.Redirect /> :
          <section className={s.form__layout}>
            {haveAccount ? (
              <Component.SignInForm changeMode={setHaveAccount} />
            ) : (
              <Component.SignUpForm changeMode={setHaveAccount} />
            )}
          </section>

      }
    </>
  );
};
