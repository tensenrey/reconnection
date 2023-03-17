import React, { FunctionComponent, useEffect } from "react";
import { CoreTypes } from "@/@types/namespaces";
import { useNavigate } from "react-router-dom";

export const GuardRoute: FunctionComponent<CoreTypes.Routing.IPrivateRoute> = ({
  children,
}) => {
  const secret = localStorage.getItem("secret");
  const navigate = useNavigate();

  useEffect(() => {
    if (secret === null) {
      navigate("/auth");
    }

    if (secret !== null && window.location.pathname === "/auth") {
      navigate("/@tensenrey");    
    }
  }, [])

  return <>{children}</>;
};
