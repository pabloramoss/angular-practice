export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}

export enum TodoStatus {
  Active = 'active',
  Completed = 'completed'
}