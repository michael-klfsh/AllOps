export interface ITask {
  _id: string;
  title: string;
  url: string;
  isOpen: boolean;
  labels: Array<string>;
  assignee: string;
  number: number;
  repoName: string;
}
