import React from "react";
import Login from "../screens/Login";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if (token != null) {
    console.log("login");
    return children;
  } else {
    console.log("not logined");
    return <Login />;
  }
};

export default ProtectedRoute;
