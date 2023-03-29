import React, {
  FunctionComponent,
  FormEvent,
  useEffect,
} from "react";
import s from "./login.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useLazySignInQuery } from "@/store/slices/auth/auth.api";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/assets/components/export";
import { UI } from "@ui/export";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [fetchSignIn, { data, isLoading }] = useLazySignInQuery();
  const { AuthChangeEmail, AuthChangePassword } = useActions();
  const payload = useTypedSelector((state) => state.Auth);

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
    <section className={s.form__layout}>
      <form className={s.form} onSubmit={handleSubmit} method="POST">
        <p className={s.navbar__logo}>reconnection</p>
        <UI.Input
          autoComplete="email"
          placeholder="e-mail"
          icon={<Icons.Email className={s.input__icon} />}
          callback={AuthChangeEmail}
          type="email"
        />
        <UI.Input
          autoComplete="current-password"
          placeholder="password"
          icon={<Icons.Password className={s.input__icon} />}
          callback={AuthChangePassword}
          type="password"
        />
        <UI.Button text="connect" isLoading={isLoading} />
        <p className={s.create__account}>
          Don't have an account? Let's create!
        </p>
      </form>
    </section>
  );
};
