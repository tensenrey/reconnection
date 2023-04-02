import React, { useEffect, useState, FunctionComponent } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Redirect } from "@/views/redirect/redirect.view";

export const GuardedRoute: FunctionComponent<any> = ({
  component: Component,
}) => {
  const location = useLocation();
  const [state, seState] = useState({
    isLoading: true,
    access: false,
  });

  const handler = async () => {
    const session = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("secret") }),
    });

    if (session.ok === true) {
      const access = await session.json();
      return seState({ isLoading: false, access });
    }

    seState({ isLoading: false, access: false });
  };

  useEffect(() => {
    handler();
  }, [location]);

  return state.isLoading ? (
    <Redirect children={<></>} />
  ) : state.access ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};
