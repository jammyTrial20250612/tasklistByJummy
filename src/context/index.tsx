import React, { createContext, useContext, useEffect, useState } from "react";
import {
  localstoragetask,
  storedtask,
  taskContext,
  apiContext,
  TaskFunc,
  TaskFuncCoding,
  TaskFuncPlans,
  TaskFuncSlack,
  TaskFuncServermanagement,
  TaskFuncTips,
  taskState,
  localState,
  selectTopic,
  storedtask_coding,
  storedtask_plans,
  storedtask_servermanagement,
  storedtask_slack,
  storedtask_tips,
  localstoragetask_plans,
} from "../types";
import _ from "lodash";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
  const [task, setTask] = useState<taskState>({
    storedtasks_coding: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask_coding)
      ),
    storedtasks: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask)
      ),
    storedtasks_plans: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask_plans)
      ),
    storedtasks_servermanagement: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask_servermanagement)
      ),
    storedtasks_slack: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask_slack)
      ),
    storedtasks_tips: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask_tips)
      ),
  });

  const [localTasklist, setlocalTasklist] = useState<localState>({
    localstoragetasks: [],
    localstoragetasks_coding: [],
    localstoragetasks_plans: [],
    localstoragetasks_servermanagement: [],
    localstoragetasks_slack: [],
    localstoragetasks_tips: [],
  });

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [topic, setTopic] = useState<selectTopic>({
    selectTopic: "",
  });

  useEffect(() => {
    console.log("useEffect");
  }, []);
  // const [openModal, setopenModal] = useState<boolean>(false);

  // function contextReload(){
  //       setTask();
  // };

  ///////////////////////Coding//////////////////////////////////////////////

  const taskFuncCoding: TaskFuncCoding = {
    taskCreateCoding: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks_coding.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask_coding = {
          id,
          title,
          content,
          check: false,
        };
        return {
          ...prev,
          storedtasks_coding: [...prev.storedtasks_coding, newTask],
        };
      });
    },
    taskCompleteCoding: (id, isCompleteCoding) => {
      setTask((prev) => {
        const updated = prev.storedtasks_coding.map((task) =>
          task.id === id ? { ...task, check: isCompleteCoding } : task
        );
        return { ...prev, storedtasks_coding: updated };
      });
    },
    deleteCoding: (id) => {
      setTask((prev) => {
        const updated = prev.storedtasks_coding.filter((task) => task.id !== id);
        return { ...prev, storedtasks_coding: updated };
      });
    },
    deleteAllCoding: () => {
      setTask((prev) => ({ ...prev, storedtasks_coding: [] }));
      window.location.reload();
    },
    taskWriteCoding: () => {
      const localStorageTask = JSON.stringify(task.storedtasks_coding);
      localStorage.setItem("localStorageTaskCoding", localStorageTask);
    },
    taskReadCoding: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTaskCoding");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    loadLocalCoding: () => {
      setTask((prev) => {
        prev.storedtasks_coding.splice(0, prev.storedtasks_coding.length);
        const getLocalstorage = localStorage.getItem("localStorageTaskCoding");
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks_coding.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as storedtask_coding);
          }
        }
        return {
          ...prev,
          storedtasks_coding: [...prev.storedtasks_coding],
        };
      });
    },
    selectPageCoding: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Coding",
        };
      });
    },
  };

  // filter

  ///////////////////////Kintone//////////////////////////////////////////////

  const taskFunc: TaskFunc = {
    taskCreate: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask = {
          id,
          title,
          content,
          check: false,
        };
        return { ...prev, storedtasks: [...prev.storedtasks, newTask] };
      });
    },
    taskComplete: (id, isComplete) => {
      setTask((prev) => {
        const updated = prev.storedtasks.map((task) =>
          task.id === id ? { ...task, check: isComplete } : task
        );
        return { ...prev, storedtasks: updated };
      });
    },
    deleteAll: () => {
      setTask((prev) => ({ ...prev, storedtasks: [] }));
      window.location.reload();
    },
    taskWrite: () => {
      const localStorageTask = JSON.stringify(task.storedtasks);
      localStorage.setItem("localStorageTask", localStorageTask);
    },
    taskRead: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    ///////loadLocal=loadLocalKintone
    loadLocal: () => {
      setTask((prev) => {
        prev.storedtasks.splice(0, prev.storedtasks.length);
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as localstoragetask);
          }
        }
        return {
          ...prev,
          localstoragetasks: [...prev.storedtasks],
        };
      });
    },
    selectPage: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Kintone",
        };
      });
    },
  };

  /////////////////////////////Plans////////////////////////////////////////

  const taskFuncPlans: TaskFuncPlans = {
    taskCreatePlans: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks_plans.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask_plans = {
          id,
          title,
          content,
          check: false,
        };
        return {
          ...prev,
          storedtasks_plans: [...prev.storedtasks_plans, newTask],
        };
      });
    },
    taskCompletePlans: (id, isCompletePlans) => {
      setTask((prev) => {
        const updated = prev.storedtasks_plans.map((task) =>
          task.id === id ? { ...task, check: isCompletePlans } : task
        );
        return { ...prev, storedtasks_plans: updated };
      });
    },
    deleteAllPlans: () => {
      setTask((prev) => ({ ...prev, storedtasks_plans: [] }));
      window.location.reload();
    },
    taskWritePlans: () => {
      const localStorageTask = JSON.stringify(task.storedtasks_plans);
      localStorage.setItem("localStorageTaskPlans", localStorageTask);
    },
    taskReadPlans: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTaskPlans");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    loadLocalPlans: () => {
      setTask((prev) => {
        prev.storedtasks_plans.splice(0, prev.storedtasks_plans.length);
        const getLocalstorage = localStorage.getItem("localStorageTaskPlans");
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks_plans.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as localstoragetask);
          }
        }
        return {
          ...prev,
          localstoragetasks_plans: [...prev.storedtasks_plans],
        };
      });
    },
    selectPagePlans: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Plans",
        };
      });
    },
  };

  /////////////////////////////Slacks////////////////////////////////////////

  const taskFuncSlack: TaskFuncSlack = {
    taskCreateSlack: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks_slack.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask_slack = {
          id,
          title,
          content,
          check: false,
        };
        return {
          ...prev,
          storedtasks_slack: [...prev.storedtasks_slack, newTask],
        };
      });
    },
    taskCompleteSlack: (id, isCompleteSlacks) => {
      setTask((prev) => {
        const updated = prev.storedtasks_slack.map((task) =>
          task.id === id ? { ...task, check: isCompleteSlacks } : task
        );
        return { ...prev, storedtasks_slacks: updated };
      });
    },
    deleteAllSlack: () => {
      setTask((prev) => ({ ...prev, storedtasks_slacks: [] }));
      window.location.reload();
    },
    taskWriteSlack: () => {
      const localStorageTask = JSON.stringify(task.storedtasks_slack);
      localStorage.setItem("localStorageTaskSlack", localStorageTask);
    },
    taskReadSlack: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    loadLocalSlack: () => {
      setTask((prev) => {
        prev.storedtasks_slack.splice(0, prev.storedtasks_slack.length);
        const getLocalstorage = localStorage.getItem("localStorageTaskSlack");
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks_slack.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as localstoragetask);
          }
        }
        return {
          ...prev,
          localstoragetasks_slack: [...prev.storedtasks_slack],
        };
      });
    },
    selectPageSlack: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Slack",
        };
      });
    },
  };

  /////////////////////////////////////////////////////////////////////

  /////////////////////////////Servermanagement////////////////////////////////////////

  const taskFuncServermanagement: TaskFuncServermanagement = {
    taskCreateServermanagement: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks_servermanagement.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask_servermanagement = {
          id,
          title,
          content,
          check: false,
        };
        return {
          ...prev,
          storedtasks_servermanagement: [
            ...prev.storedtasks_servermanagement,
            newTask,
          ],
        };
      });
    },
    taskCompleteServermanagement: (id, isCompleteServermanagement) => {
      setTask((prev) => {
        const updated = prev.storedtasks_servermanagement.map((task) =>
          task.id === id ? { ...task, check: isCompleteServermanagement } : task
        );
        return { ...prev, storedtasks_servermanagement: updated };
      });
    },
    deleteAllServermanagement: () => {
      setTask((prev) => ({ ...prev, storedtasks_servermanagement: [] }));
      window.location.reload();
    },
    taskWriteServermanagement: () => {
      const localStorageTask = JSON.stringify(
        task.storedtasks_servermanagement
      );
      localStorage.setItem(
        "localStorageTaskServermanagement",
        localStorageTask
      );
    },
    taskReadServermanagement: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    loadLocalServermanagement: () => {
      setTask((prev) => {
        prev.storedtasks_servermanagement.splice(0, prev.storedtasks_servermanagement.length);
        const getLocalstorage = localStorage.getItem(
          "localStorageTaskServermanagement"
        );
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks_servermanagement.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as localstoragetask);
          }
        }
        return {
          ...prev,
          localstoragetasks: [...prev.storedtasks_servermanagement],
        };
      });
    },
    selectPageServermanagement: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Servermanagement",
        };
      });
    },
  };

  /////////////////////////////////////////////////////////////////////

  /////////////////////////////Tips////////////////////////////////////////

  const taskFuncTips: TaskFuncTips = {
    taskCreateTips: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks_tips.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask_tips = {
          id,
          title,
          content,
          check: false,
        };
        return {
          ...prev,
          storedtasks_tips: [...prev.storedtasks_tips, newTask],
        };
      });
    },
    taskCompleteTips: (id, isCompleteTips) => {
      setTask((prev) => {
        const updated = prev.storedtasks_tips.map((task) =>
          task.id === id ? { ...task, check: isCompleteTips } : task
        );
        return { ...prev, storedtasks_tips: updated };
      });
    },
    deleteAllTips: () => {
      setTask((prev) => ({ ...prev, storedtasks_tips: [] }));
      window.location.reload();
    },
    taskWriteTips: () => {
      const localStorageTask = JSON.stringify(task.storedtasks_tips);
      localStorage.setItem("localStorageTaskTips", localStorageTask);
    },
    taskReadTips: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };
        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    loadLocalTips: () => {
        setTask((prev) => {
        prev.storedtasks_tips.splice(0,prev.storedtasks_tips.length)
        const getLocalstorage = localStorage.getItem("localStorageTaskTips");
        if (getLocalstorage) {
          const jsonparselist = JSON.parse(getLocalstorage);
          for (let k of jsonparselist) {
            prev.storedtasks_tips.push({
              id: k.id,
              content: k.content,
              title: k.title,
              check: k.check,
              detailCheck: k.detailCheck,
            } as localstoragetask);
          }
        }
        return {
          ...prev,
          localstoragetasks: [...prev.storedtasks_tips],
        };
      });
    },
    selectPageTips: () => {
      setTopic((prev) => {
        console.log(topic);
        const url = window.location;
        if (prev.selectTopic !== "") {
          window.location.replace({ url } + "/" + prev.selectTopic);
        }
        return {
          ...prev,
          selectTopic: "Tips",
        };
      });
    },
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <TaskContext.Provider
      value={{
        ...task,
        ...localTasklist,
        ...topic,
        ...taskFunc,
        ...taskFuncCoding,
        ...taskFuncPlans,
        ...taskFuncSlack,
        ...taskFuncServermanagement,
        ...taskFuncTips,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
