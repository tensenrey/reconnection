import React, { FunctionComponent } from "react";

interface IMeetIcon {
  [className: string]: string;
}

export const Meet: FunctionComponent<IMeetIcon> = ({ className }) => (
  <img className={className} src={require("./meet.svg")} />
);
