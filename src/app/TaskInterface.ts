export interface Task {
  id?: number;
  title: string;
  description: string;
  deadline: string;
  priority: boolean;
  status: string;
  assignee: string;
};

export interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
};
