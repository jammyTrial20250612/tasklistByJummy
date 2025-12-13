import React from "react";
import { Routes, Route } from "react-router-dom";
import Plans from "../components/unique/Plans/Plans";
import Home from "../components/Home";
import Kintone from "../components/unique/Kintone/Kintone";
import Slack from "../components/unique/Slack/Slack";
import Servermanagement from "../components/unique/Servermanagement/Servermanagement";
import Tips from "../components/unique/Tips/Tips";
import Coding from "../components/unique/Coding/Coding";

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/coding" element={<Coding />} />
      <Route path="/kintone" element={<Kintone />} />
      <Route path="/slack" element={<Slack />} />
      <Route path="/servermanagement" element={<Servermanagement />} />
      <Route path="/tips" element={<Tips />} />
    </Routes>
  );
};

export default Pages;
