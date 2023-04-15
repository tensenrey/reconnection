import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import s from "./call__line.module.scss";

export const CallLine: FunctionComponent = () => {
  return (
    <Link to="/channel/a1">
      <div className={s.call__line} />
    </Link> 
  );
}


