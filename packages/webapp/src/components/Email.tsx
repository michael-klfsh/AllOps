import React, { useEffect, useState } from "react";

const Email = ({ children }: { children?: React.ReactNode }) => {
  //Variable
  const [emails, setEmails] = useState(0);
  const baseURL = "http://127.0.0.1:3001";

  useEffect(() => {
    fetch(`${baseURL}/emails`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setEmails(json.number);
      })
      .catch((error) => console.error(error));
  }, []);

  return <h5>Today's inbox update: You've received {emails} new emails!</h5>;
};
export default Email;
