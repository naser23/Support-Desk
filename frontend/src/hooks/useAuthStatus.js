import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // Look for user in state
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // check if user is logged in
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setCheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
};
