import React, { FunctionComponent } from "react";

interface INatificationIcon {
  [className: string]: string;
}

export const Natification: FunctionComponent<INatificationIcon> = ({ className }) => (
  <img className={className} src={require("./natification.svg")} />
);
