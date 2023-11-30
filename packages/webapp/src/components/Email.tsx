import React, { useEffect, useState } from "react";

const Email = () => {
  //Variable
  const [emails, setEmails] = useState<number>(0);
  const baseURL = "http://127.0.0.1:3001";

  useEffect(() => {
    fetch(`${baseURL}/emails`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (Number.isInteger(json.number)) setEmails(json.number);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <h5>
      You've received <strong>{emails} new emails</strong>!
    </h5>
  );
};
export default Email;
