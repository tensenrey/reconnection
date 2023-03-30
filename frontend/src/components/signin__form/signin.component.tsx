import React, { FunctionComponent, FormEvent, useEffect } from "react";
import s from "./signin.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useLazySignInQuery } from "@/store/slices/api/auth.api";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/assets/components/export";
import { UI } from "@ui/export";

interface ISignInFormPayload {
  changeMode: Function;
}

export const SignInForm: FunctionComponent<ISignInFormPayload> = ({
  changeMode,
}) => {
  const navigate = useNavigate();
  const [fetchSignIn, { data, isLoading }] = useLazySignInQuery();
  const { SignInChangeEmail, SignInChangePassword } = useActions();
  const payload = useTypedSelector((state) => state.SignIn);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSignIn(payload);
  };

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("secret", data.token);
      navigate("@tensenrey");
    }
  }, [data]);

  return (
    <form className={s.form} onSubmit={handleSubmit} method="POST">
      <p className={s.navbar__logo}>reconnection</p>
      <UI.Input
        autoComplete="email"
        placeholder="e-mail"
        icon={<Icons.Email className={s.input__icon} />}
        callback={SignInChangeEmail}
        type="email"
      />
      <UI.Input
        autoComplete="current-password"
        placeholder="password"
        icon={<Icons.Password className={s.input__icon} />}
        callback={SignInChangePassword}
        type="password"
      />
      <UI.Button text="connect" isLoading={isLoading} />
      <p className={s.create__account} onClick={() => changeMode(false)}>
        Don't have an account? Let's create!
      </p>
    </form>
  );
};
