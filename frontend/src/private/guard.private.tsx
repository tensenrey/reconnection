import React, { FunctionComponent, useEffect } from "react";
import { CoreTypes } from "@/@types/namespaces";

export const GuardRoute: FunctionComponent<CoreTypes.Routing.IPrivateRoute> = ({
  children,
}) => {
  useEffect(() => console.log("guard route"));
  return <>{children}</>;
};
