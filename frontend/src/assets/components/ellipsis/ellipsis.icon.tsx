import React, { FunctionComponent } from "react";

interface IEllipsisIcon {
  [className: string]: string;
}

export const Ellipsis: FunctionComponent<IEllipsisIcon> = ({ className }) => (
  <img src={require("./ellipsis.svg")} className={className} />
);
