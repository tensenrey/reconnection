import { useState, useEffect } from "react";

export const useOnlineStatus = (): boolean => {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setOnline(false);
    const handleOnline = () => setOnline(true);
    
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return online;
};
