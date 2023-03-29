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
import { Icons } from "@/assets/components/export";

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
        <div className={s.input__icon__group}>
          <input
            className={s.input}
            type="email"
            autoComplete="email"
            placeholder="e-mail"
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              AuthChangeEmail(e.target.value)
            }
          />
          <Icons.Email className={s.input__icon} />
        </div>
        <div className={s.input__icon__group}>
          <input
            className={s.input}
            type="password"
            autoComplete="current-password"
            placeholder="password"
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              AuthChangePassword(e.target.value)
            }
          />
          <Icons.Password className={s.input__icon} />
        </div>
        <button type="submit" className={s.button} disabled={isLoading}>
          {isLoading ? <Icons.Loading className={s.button__loading} /> : "connect"}
        </button>
        <p className={s.create__account}>
          Don't have an account? Let's create!
        </p>
      </form>
    </section>
  );
};
