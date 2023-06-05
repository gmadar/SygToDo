import { ToDoPriority } from "./ToDoPriority";

export interface ToDo {
  id: number;
  task: string;
  createdAt: Date;
  priority: ToDoPriority;
  isCompleted: boolean;
}
