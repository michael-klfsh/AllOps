export interface ITask {
  id: number;
  title: string;
  url: string;
  isOpen: boolean;
  assignee: string;
  number: number;
  repoName: string;
  labels: { name: string; color: string }[];
  lastUpdated: string;
}
