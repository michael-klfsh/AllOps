import { ITask } from "@AllOps/lib-common/lib/interfaces/ITask";

class Task implements ITask {
  _id: string;
  title: string;
  url: string;
  isOpen: boolean;
  labels: string[];
  assignee: string;
  number: number;
  repoName: string;
}

module.exports = Task;
