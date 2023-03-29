import React, { FunctionComponent, ChangeEvent, InputHTMLAttributes } from "react";
import s from "./input.module.scss";

interface IInputPayload extends InputHTMLAttributes<HTMLInputElement> {
  callback: Function;
  icon: JSX.Element
}

export const Input: FunctionComponent<IInputPayload> = ({ icon, callback, type, autoComplete, placeholder }) => {
  return (
    <div className={s.input__icon__group}>
      <input
        className={s.input}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          callback(e.target.value)
        }
      />
      { icon }
    </div>
  );
}