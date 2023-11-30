import React, { useEffect, useState } from "react";
import Login from "../screens/Login";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  const baseURL = "http://127.0.0.1:3002";
  const [isvalidated, setvalidation] = useState(false);

  useEffect(() => {
    fetch(`${baseURL}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        response
          .json()
          .then(() => {
            //TODO assign user data to variable
            setvalidation(true);
          })
          .catch((error) => {
            console.log(error);
            setvalidation(false);
          });
      })
      .catch((e: Error) => console.log("error " + e.message));
  }, [token]);

  if (token != null && isvalidated) {
    return children;
  } else {
    return <Login />;
  }
};

export default ProtectedRoute;
