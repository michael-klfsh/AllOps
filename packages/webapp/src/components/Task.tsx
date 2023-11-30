import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ITask } from "@AllOps/lib-common";

const Task = ({ children }: { children?: React.ReactNode }) => {
  const baseURL = "http://127.0.0.1:3001";
  const [issues, setIssues] = useState<ITask[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/tasks/user/1`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("data");
        const tasks: ITask[] = json;
        console.log(tasks);
        setIssues(tasks);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>Your current assigned GitHub issues</h3>
      <ListGroup>
        {issues.map((issue) => (
          <ListGroupItem key={issue._id} href={issue.url} tag="a">
            <div>
              <span className="pe-2" style={{ fontWeight: "bold" }}>
                {issue.title}
              </span>{" "}
              at <span>{issue.repoName}</span>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default Task;
