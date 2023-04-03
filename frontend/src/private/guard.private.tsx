import React, { useLayoutEffect, useState, FunctionComponent } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Redirect } from "@/views/redirect/redirect.view";

export const GuardedRoute: FunctionComponent<any> = ({
  component: Component,
}) => {
  const location = useLocation();
  const [state, setState] = useState({
    isLoading: true,
    access: false,
  });

  const sessionHandler = async () => {
    const session = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("secret") }),
    });

    if (session.ok === true) {
      const access = await session.json();
      return setState({ isLoading: false, access });
    }

    setState({ isLoading: false, access: false });
    localStorage.clear();
  };

  useLayoutEffect(() => {
    sessionHandler();
  }, [location]);

  return state.isLoading ? (
    <Redirect />
  ) : state.access ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};
