import React, { useEffect, useState, FunctionComponent } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { View } from "@/views/export";

interface IGuard {
  component: FunctionComponent
}

export const Guard: FunctionComponent<IGuard> = ({
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

    localStorage.clear();
    return setState({ isLoading: false, access: false });
  };

  useEffect(() => {
    sessionHandler();
  }, [location]);

  return state.isLoading ? (
    <View.Redirect />
  ) : state.access ? (
    <Component />
  ) : (
    <Navigate to="/auth" />
  );
};
