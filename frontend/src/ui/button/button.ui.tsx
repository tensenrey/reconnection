import React, { FunctionComponent } from "react";
import { Icons } from "@/assets/components/export";
import s from "./button.module.scss";

interface IButtonPayload {
  text: string;
  isLoading: boolean;
}

export const Button: FunctionComponent<IButtonPayload> = ({
  text,
  isLoading,
}) => {
  return (
    <button type="submit" className={s.button} disabled={isLoading}>
      {isLoading ? <Icons.Loading className={s.button__loading} /> : text}
    </button>
  );
};
