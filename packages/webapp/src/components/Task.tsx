import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ITask } from "@AllOps/lib-common";

const Task = () => {
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
        const tasks: ITask[] = json;
        setIssues(tasks);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h3>Your current assigned GitHub issues</h3>
      <ListGroup>
        {issues.map((issue, index) => (
          <ListGroupItem
            key={index}
            href={issue.url}
            tag="a"
            className={`d-flex justify-content-between align-items-start ${
              index % 2 === 0 ? "list-group-item-secondary" : ""
            }`}
            target="_blank"
          >
            <>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{issue.title}</div>
                at {issue.repoName}, last updated:{" "}
                {new Date(`${issue.lastUpdated}`).toLocaleDateString()}
              </div>
              {issue.labels.map((label, index) => (
                <span
                  key={`${issue.title}-${index}-${label.name}`}
                  className={"ms-1 badge rounded-pill"}
                  ref={(el) => {
                    if (el) {
                      el.style.setProperty(
                        "background-color",
                        `${label.color}`,
                        "important"
                      );
                    }
                  }}
                >
                  {label.name}
                </span>
              ))}
            </>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};
export default Task;
