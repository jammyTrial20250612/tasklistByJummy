import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Task from "../components/Task";

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Task tag="plans" />} />
      <Route path="/coding" element={<Task tag="coding" />} />
      <Route path="/kintone" element={<Task tag="kintone" />} />
      <Route path="/slack" element={<Task tag="slack" />} />
      <Route
        path="/servermanagement"
        element={<Task tag="servermanagement" />}
      />
      <Route path="/tips" element={<Task tag="tips" />} />
    </Routes>
  );
};

export default Pages;
