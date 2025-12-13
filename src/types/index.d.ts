export type ITaskContext = TaskState & TaskFunc;

export type TaskState = { [key in Tag]: StoredTask[] };

export type LocalStorageState = { [key in Tag]: LocalStorageTask[] };

export type Tag =
  | "coding"
  | "plans"
  | "kintone"
  | "slack"
  | "servermanagement"
  | "tips";

export type StoredTask = {
  id: number;
  title: string;
  content: string;
  tag: Tag;
  check: boolean;
  detailCheck?: boolean;
};

export type LocalStorageTask = {
  id: number;
  title: string;
  content: string;
  tag: Tag;
  check: boolean;
  detailCheck?: boolean;
};

export type selectTopic = {
  selectTopic:
  | ""
  | "Coding"
  | "Kintone"
  | "Plans"
  | "Servermanagement"
  | "Slack"
  | "Tips"
  | "API"
  | "MockRead";
};

export type item = {
  id: number;
  param1: number;
  param2: number;
  param3: number;
  name: string;
};

export type TaskFunc = {
  taskCreate: (title: string, content: string, tag: Tag) => void;
  taskComplete: (id: number, isComplete: boolean, tag: Tag) => void;
  delete: (id: number, tag: Tag) => void;
  deleteAll: (tag: Tag) => void;
};

