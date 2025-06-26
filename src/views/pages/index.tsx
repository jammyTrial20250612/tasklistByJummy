import React from "react";
import { Routes, Route } from "react-router-dom";
import Plans from "../components/unique/Plans/Plans";
import Home from "../components/Home";
import Kintone from "../components/unique/Kintone/Kintone";
import Slack from "../components/unique/Slack/Slack";
import Servermanagement from "../components/unique/Servermanagement/Servermanagement";
import Tips from "../components/unique/Tips/Tips";
import Coding from "../components/unique/Coding/Coding";
import { CRUD } from "../components/crud/CRUD";
import { MockRead } from "../components/crud/MockRead";
import { items, item } from "../../types";
// import { ListItemSecondaryAction } from "@material-ui/core";
import { AxiosGet } from "../components/crud/AxiosGet";
import UserList from "../components/crud/UserList";
import { MockPython } from "../components/crud/MockPython";

const Pages: React.FC = () => {
  const items1 = [
    {
      id: 1,
      param1: 100,
      param2: 200,
      param3: 300,
      name: "phoo",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/kintone" element={<Kintone />} />
      <Route path="/slack" element={<Slack />} />
      <Route path="/servermanagement" element={<Servermanagement />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/crud" element={<CRUD />} />
      <Route path="/axios_get" element={<AxiosGet />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/mockread" element={<MockRead />} />
    </Routes>
  );
};

export default Pages;
