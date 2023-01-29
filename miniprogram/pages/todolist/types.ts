export interface ITodoItem {
  id: string;
  title: string;
  note: string;
  date: string;
  time: string;
  completed: boolean;
}

export type TTodoList = ITodoItem[];
