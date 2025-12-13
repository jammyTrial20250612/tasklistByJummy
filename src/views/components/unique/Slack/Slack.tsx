import Tasklist from "./tasklist/Tasklist";
import Save from "./tasklist/Save";
import React, { useState } from "react";

const Servermanagement: React.FC = () => {
  const [mode, setmode] = useState<string>("Tasklist");
  function toggle() {
    mode === "Tasklist" ? setmode("Save") : setmode("Tasklist");
  }
  return (
    <>
      <section>{mode === "Tasklist" ? <Tasklist /> : <Save />}</section>
      <section className="text-center">
      </section>
      <section>
        <h4 className="text-pink-300 bg-pink-100 text-center py-10 text-2xl font-bold">
          Slack
        </h4>
      </section>
    </>
  );
};

export default Servermanagement;

