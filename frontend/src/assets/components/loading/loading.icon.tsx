import React, { FunctionComponent } from "react";

interface ILoadingIcon {
  [className: string]: string;
}

export const Loading: FunctionComponent<ILoadingIcon> = ({ className }) => (
  <img className={className} src={require("./loading.svg")} />
);
