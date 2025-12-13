import internal from "stream";

export type taskContext = taskState & localState & TaskFunc & TaskFuncCoding & TaskFuncPlans & TaskFuncServermanagement & TaskFuncSlack & TaskFuncTips;

export type apiContext = items & item & endpoint;
// export type apiContext = items & item & endpoint & getAPISample;

export type smsContext = users & user;

export type taskState = {
  storedtasks: storedtask[];
  storedtasks_coding: storedtask_coding[];
  storedtasks_plans: storedtask_plans[];
  storedtasks_servermanagement: storedtask_servermanagement[];
  storedtasks_slack: storedtask_slack[];
  storedtasks_tips: storedtask_tips[];
};

export type localState = {
  localstoragetasks: localstoragetask[];
  localstoragetasks_coding: localstoragetask_coding[];
  localstoragetasks_plans: localstoragetask_plans[];
  localstoragetasks_servermanagement: localstoragetask_servermanagement[];
  localstoragetasks_slack: localstoragetask_slack[];
  localstoragetasks_tips: localstoragetask_tips[];
};

export type storedtask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_coding = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_plans = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_servermanagement = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_slack = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_tips = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type localstoragetask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type localstoragetask_coding = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type localstoragetask_kintone = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type localstoragetask_plans = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};
export type localstoragetask_servermanagement = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};
export type localstoragetask_slack = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};
export type localstoragetask_tips = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type selectTopic = {
  selectTopic: "" | "Coding" | "Kintone" | "Plans" | "Servermanagement" | "Slack" | "Tips" | "API" | "MockRead";
};

export type item = {
  id: number;
  param1: number;
  param2: number;
  param3: number;
  name: string;  
}

export type items = {
  items: item[];
}

export type user = {
  id: number;
  name: string;
}

export type users = {
  users: user[];
}

export type TaskFunc = {
  taskCreate: (title: string, content: string) => void;
  taskComplete: (id: number, isComplete: boolean) => void;
  deleteAll: () => void;
  taskWrite: () => void;
  taskRead: () => void;
  loadLocal: () => void;
  selectPage: () => void;
};

export type TaskFuncCoding = {
  taskCreateCoding: (title: string, content: string) => void;
  taskCompleteCoding: (id: number, isCompleteCoding: boolean) => void;
  deleteCoding: (id: number) => void;
  deleteAllCoding: () => void;
  taskWriteCoding: () => void;
  taskReadCoding: () => void;
  loadLocalCoding: () => void;
  selectPageCoding: () => void;
};

export type TaskFuncPlans = {
  taskCreatePlans: (title: string, content: string) => void;
  taskCompletePlans: (id: number, isCompletePlans: boolean) => void;
  deleteAllPlans: () => void;
  taskWritePlans: () => void;
  taskReadPlans: () => void;
  loadLocalPlans: () => void;
  selectPagePlans: () => void;
};

export type TaskFuncSlack = {
  taskCreateSlack: (title: string, content: string) => void;
  taskCompleteSlack: (id: number, isCompleteSlacks: boolean) => void;
  deleteAllSlack: () => void;
  taskWriteSlack: () => void;
  taskReadSlack: () => void;
  loadLocalSlack: () => void;
  selectPageSlack: () => void;
};

export type TaskFuncServermanagement = {
  taskCreateServermanagement: (title: string, content: string) => void;
  taskCompleteServermanagement: (id: number, isCompleteServermanagement: boolean) => void;
  deleteAllServermanagement: () => void;
  taskWriteServermanagement: () => void;
  taskReadServermanagement: () => void;
  loadLocalServermanagement: () => void;
  selectPageServermanagement: () => void;
};

export type TaskFuncTips = {
  taskCreateTips: (title: string, content: string) => void;
  taskCompleteTips: (id: number, isCompleteTips: boolean) => void;
  deleteAllTips: () => void;
  taskWriteTips: () => void;
  taskReadTips: () => void;
  loadLocalTips: () => void;
  selectPageTips: () => void;
};

export type endpoint = {
  endpoint : string;
}

export type getAPISample = {
  getAPI: (url: string) => void;
}