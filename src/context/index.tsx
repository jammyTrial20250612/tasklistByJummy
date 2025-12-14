import React, { createContext, useContext, useMemo, useState } from "react";
import { ITaskContext, TaskFunc, TaskState, StoredTask, Tag } from "../types";
const TaskContext = createContext({} as ITaskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
const genDefaultTask = (tag: Tag): StoredTask[] => [
  {
    id: 1,
    title: "title",
    content: "content",
    check: false,
    detailCheck: false,
    tag: tag,
  },
];
const genDefaultTasks = () => {
  return {
    coding: genDefaultTask("coding"),
    plans: genDefaultTask("plans"),
    kintone: genDefaultTask("kintone"),
    servermanagement: genDefaultTask("servermanagement"),
    slack: genDefaultTask("slack"),
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
          content,
          tag,
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
          task.id === id ? { ...task, check: isComplete } : task
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
    changeBgColor: (tag: Tag) => {
      switch (tag) {
      case "coding":
        return "bg-green-100";
      case "plans":
        return "bg-red-100";
      case "kintone":
        return "bg-cyan-100";
      case "slack":
        return "bg-pink-100";
      case "servermanagement":
        return "bg-violet-100";
      case "tips":
        return "bg-yellow-100";
    }},
    changeTextColor: (tag: Tag) => {
      switch (tag) {
      case "coding":
        return "text-green-500";
      case "plans":
        return "text-red-500";
      case "kintone":
        return "text-cyan-500";
      case "slack":
        return "text-pink-500";
      case "servermanagement":
        return "text-violet-500";
      case "tips":
        return "text-yellow-500";
    }},
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
