import React, { createContext, useContext, useMemo, useState } from "react";
import { ITaskContext, TaskFunc, TaskState, StoredTask, Tag } from "../types";
const TaskContext = createContext({} as ITaskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
const genDefaultTask = (tag: Tag): StoredTask[] => [
  {
    id: 1,
    content: "content",
    title: "title",
    tag,
    check: false,
    detailCheck: true,
  },
];
const genDefaultTasks = () => {
  return {
    coding: genDefaultTask("coding"),
    plans: genDefaultTask("plans"),
    kintone: genDefaultTask("kintone"),
    slack: genDefaultTask("slack"),
    servermanagement: genDefaultTask("servermanagement"),
    tips: genDefaultTask("tips"),
  };
};
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
  const initialTasks = useMemo(() => taskRead(), []);
  const [task, setTask] = useState<TaskState>(initialTasks);

  const taskFunc: TaskFunc = {
    taskCreate: (title, content, tag) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev[tag].at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask = {
          id,
          title,
          tag,
          content,
          check: false,
        };
        const tasks = { ...prev, [tag]: [...prev[tag], newTask] };
        taskWrite(tasks);
        return tasks;
      });
    },
    taskComplete: (id, isComplete, tag) => {
      setTask((prev) => {
        const updated = prev[tag].map((task) =>
          task.id === id ? { ...task, check: isComplete } : task,
        );
        const tasks = { ...prev, [tag]: updated };
        taskWrite(tasks);
        return tasks;
      });
    },
    delete: (id, tag) => {
      setTask((prev) => {
        const updated = prev[tag].filter((task) => task.id !== id);
        const tasks = { ...prev, [tag]: updated };
        taskWrite(tasks);
        return tasks;
      });
    },
    deleteAll: (tag) => {
      setTask((prev) => {
        const tasks = { ...prev, [tag]: [] };
        taskWrite(tasks);
        return tasks;
      });
    },
  };

  return (
    <TaskContext.Provider value={{ ...task, ...taskFunc }}>
      {children}
    </TaskContext.Provider>
  );
};

const taskRead = () => {
  const strTasks = localStorage.getItem("tasks");
  if (strTasks) {
    return JSON.parse(strTasks) as TaskState;
  }
  return genDefaultTasks();
};

const taskWrite = (tasks: TaskState) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
