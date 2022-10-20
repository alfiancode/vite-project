import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/Firebase";
import Login from "../Page/Login";
const Protected = ({ children }) => {
  const [user, isLoading] = useAuthState(auth);
  if (user) {
    return children;
  }
  return <Login />;
};

export default Protected;
