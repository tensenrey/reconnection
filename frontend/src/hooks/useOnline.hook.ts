import { useState, useEffect } from "react";

export const useOnlineStatus = (): boolean => {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    function handleOffline() {
      setOnline(false);
    }

    function handleOnline() {
      setOnline(true);
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return online;
};
