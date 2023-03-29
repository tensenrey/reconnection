import React, { FunctionComponent } from "react";

interface IEmailIcon {
  [className: string]: string;
}

export const Email: FunctionComponent<IEmailIcon> = ({ className }) => (
  <img className={className} src={require("./email.svg")} />
);
