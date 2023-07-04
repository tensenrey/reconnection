import React from "react";
import { createRoot } from "react-dom/client";
import { AppCore } from "./app";
import ApplicationCore from "./core/core";

ApplicationCore.setup(() =>
  createRoot(document.getElementById("app") as HTMLDivElement).render(
    <AppCore />
  )
);
