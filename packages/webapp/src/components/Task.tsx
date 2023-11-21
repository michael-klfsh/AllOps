import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Task = ({ children }: { children?: React.ReactNode }) => {
  const baseURL = "http://127.0.0.1:3001";
  const [issues, setIssues] = useState([
    { id: 0, html_url: "", title: "", assignee: "" },
  ]); //Add model interface

  useEffect(() => {
    fetch(`${baseURL}/tasks/user/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log("data");
        console.log(json);
        setIssues(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>Your current assigned GitHub issues</h3>
      <ListGroup>
        {issues.map((issue) => (
          <ListGroupItem key={issue.id} href={issue.html_url} tag="a">
            <div>
              <span className="pe-2" style={{ fontWeight: "bold" }}>
                {issue.title}
              </span>{" "}
              at <span>{issue.assignee}</span>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default Task;
