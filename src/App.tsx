import Pages from "./views/pages";
import { Link } from "react-router-dom";
import { TaskFieldContextProvider } from "./context";
import { useTask } from "./context";
import { useState,useEffect } from "react";

const App:React.FC = () => {
  const tasks = useTask();
  return (
    <>
      <TaskFieldContextProvider>
        <div className="text-sky-300 bg-sky-100 text-center py-5 text-2xl font-bold">
          Task List By Jummy
        </div>
        <section className="bg-gray-50">
          <ul className="flex flex-row">
            <li className={`basis-1/6 text-2xl text-center m-0 hover:bg-green-50 text-green-300`}>
              <Link to="/coding">
                <p className="py-4 w-xl h-16">Coding</p>
              </Link>
            </li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-red-50 text-red-300">
              <Link to="/plans">
                <p className="py-4 w-xl h-16">Plans</p>
              </Link>
            </li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-cyan-50 text-cyan-300">
              <Link to="/kintone">
                <p className="py-4 w-xl h-16">Kintone</p>
              </Link>
            </li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-pink-50 text-pink-300">
              <Link to="/slack">
                <p className="py-4 w-xl h-16">Slack</p>
              </Link>
            </li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-violet-50 text-violet-300">
              <Link to="/servermanagement">
                <p className="py-4 w-xl h-16">Servermanagement</p>
              </Link>
            </li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-yellow-50 text-yellow-300">
              <Link to="/tips">
                <p className="py-4 w-xl h-16">Tips</p>
              </Link>
            </li>          </ul>
        </section>
        <section>
          <Pages />
        </section>
      </TaskFieldContextProvider>
    </>
  );
};

export default App;
