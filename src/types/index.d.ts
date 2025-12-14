export type ITaskContext = TaskState & TaskFunc;

export type TaskState = { [key in Tag]: StoredTask[] };

export type LocalStorageState = { [key in Tag]: LocalStorageTask[] };

export type Tag =
  | "coding"
  | "kintone"
  | "plans"
  | "servermanagement"
  | "slack"
  | "tips";

export type StoredTask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
  tag: Tag;
};

export type localstoragetask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
  tag: Tag;
};

export type TaskFunc = {
  taskCreate: (title: string, content: string, tag: Tag) => void;
  taskComplete: (id: number, isComplete: boolean, tag: Tag) => void;
  delete: (id: number, tag: Tag) => void;
  deleteAll: (tag: Tag) => void;
  changeBgColor: (tag: Tag) => string;
  changeTextColor: (tag: Tag) => string;
};
