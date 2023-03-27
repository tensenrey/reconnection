import React, {
  FunctionComponent,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import s from "./login.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useLazySignInQuery } from "@/store/slices/auth/auth.api";
import { useNavigate } from "react-router-dom";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [fetchSignIn, { data, isLoading, isError }] = useLazySignInQuery();
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
        <input
          className={s.input}
          type="email"
          autoComplete="email"
          placeholder="Почта"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            AuthChangeEmail(e.target.value)
          }
        />
        <input
          className={s.input}
          type="password"
          autoComplete="current-password"
          placeholder="Пароль"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            AuthChangePassword(e.target.value)
          }
        />
        <button type="submit" className={s.button}>
          Войти
        </button>
      </form>
    </section>
  );
};
