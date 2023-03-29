import React, { FunctionComponent } from "react";

interface IPasswordIcon {
  [className: string]: string;
}

export const Password: FunctionComponent<IPasswordIcon> = ({ className }) => (
  <img className={className} src={require("./password.svg")} />
);
