import React from "react";

const Email = ({ children }: { children?: React.ReactNode }) => {
  //Variable
  const emails = 15;

  return <h5>Today's inbox update: You've received {emails} new emails!</h5>;
};
export default Email;
