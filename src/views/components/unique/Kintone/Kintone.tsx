import Tasklist from "./tasklist/Tasklist";
import Save from "./tasklist/Save";
import React, { useState } from "react";

const Kintone: React.FC = () => {
  const [mode, setmode] = useState<string>("Tasklist");
  
  function toggle() {
    mode === "Tasklist" ? setmode("Save") : setmode("Tasklist");
  }
  return (
    <>
      <section>{mode === "Tasklist" ? <Tasklist /> : <Save />}</section>
      <section className="text-center">
        {/* <button
          className="bg-sky-200 text-white py-4 px-8"
          onClick={() => toggle()}
        >
          Change
        </button> */}
      </section>
      <section>
        <h4 className="text-sky-300 bg-sky-100 text-center py-10 text-2xl font-bold">
          Kintone
        </h4>
      </section>
    </>
  );
};

export default Kintone;
