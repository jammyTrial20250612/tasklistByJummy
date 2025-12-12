import Tasklist from "./tasklist/Tasklist";
import Save from "./tasklist/Save";
import React, { useState } from "react";

const Coding: React.FC = () => {
  const [mode, setmode] = useState<string>("Tasklist");
  function toggle() {
    mode === "Tasklist" ? setmode("Save") : setmode("Tasklist");
  }
  return (
    <>
      <section>{mode === "Tasklist" ? <Tasklist /> : <Save />}</section>
      <section className="text-center">
        {/* <button
          className="bg-pink-200 text-white py-4 px-8"
          onClick={() => toggle()}
        >
          Change
        </button> */}
      </section>
      <section>
        <h4 className="text-green-300 bg-green-100 text-center py-10 text-2xl font-bold">
          Coding
        </h4>
      </section>
    </>
  );
};

export default Coding;

