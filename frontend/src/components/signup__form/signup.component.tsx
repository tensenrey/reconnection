import React, { FunctionComponent, FormEvent, useEffect } from "react";
import s from "./signup.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useLazySignUpQuery } from "@/store/slices/api/auth.api";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/assets/components/export";
import { UI } from "@ui/export";

interface ISignUpFormPayload {
  changeMode: Function;
}

export const SignUpForm: FunctionComponent<ISignUpFormPayload> = ({
  changeMode,
}) => {
  const navigate = useNavigate();

  const [fetchSignUp, { data, isLoading }] = useLazySignUpQuery();

  const { SignUpChangeEmail, SignUpChangePassword, SignUpChangeRepassoword } =
    useActions();

  const payload = useTypedSelector((state) => state.SignUp);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSignUp(payload);
  };

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("secret", data.token);
      navigate("/@tensenrey");
    }
  }, [data]);

  return (
    <form className={s.form} onSubmit={handleSubmit} method="POST">
      <p className={s.navbar__logo}>reconnection</p>
      <UI.Input
        autoComplete="email"
        placeholder="e-mail"
        icon={<Icons.Email className={s.input__icon} />}
        callback={SignUpChangeEmail}
        type="email"
      />
      <UI.Input
        autoComplete="current-password"
        placeholder="password"
        icon={<Icons.Password className={s.input__icon} />}
        callback={SignUpChangePassword}
        type="password"
      />
      <UI.Input
        autoComplete="password"
        placeholder="re-password"
        icon={<Icons.Password className={s.input__icon} />}
        callback={SignUpChangeRepassoword}
        type="password"
      />
      <UI.Button text="connect" isLoading={isLoading} />
      <p className={s.create__account} onClick={() => changeMode(true)}>
        Already have an account? Sign in!
      </p>
    </form>
  );
};
