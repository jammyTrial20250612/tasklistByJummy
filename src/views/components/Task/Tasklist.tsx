import { useState } from "react";
import { useTask } from "../../../context";
import Taskstore from "./TaskStore";
import { Tag } from "../../../types";

type Props = { tag: Tag };
const Tasklist: React.FC<Props> = ({ tag }) => {
  /* ----- context ----- */
  const tasks = useTask();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function create() {
    tasks.taskCreate(title, content, tag);
  }

  function taskDelete() {
    tasks.deleteAll(tag);
  }

    return (
    <section className={`static ${tasks.changeBgColor(tag)} h-screen`}>
      <div>
        <h4 className={`${tasks.changeTextColor(tag)} ${tasks.changeBgColor(tag)} text-center pt-4 text-xl font-bold`}>
          Tasklist
        </h4>
      </div>
      <section className="flex flex-row">
        <div className="basis-1/3">
          <ul className="absolute top-5/24 left-1/8 text-2xl h-1/6 w-3/12">
            <li className="mx-20">
              <div className="mx-10 text-center">title</div>
              <textarea
                className="mx-10 my-5 px-5 py-5 border-black rounded-xl w-full h-2/12"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-testid="input-title"
              />
            </li>
            <li className="mx-20">
              <div className="mx-10 text-center">content</div>
              <textarea
                className="mx-10 my-5 px-5 py-20 border-black rounded-xl w-full h-4/12"
                placeholder="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                data-testid="input-content"
              />
            </li>
          </ul>
          <ul className="absolute top-5/24 left-1/4 m-4">
            <li className="text-center">
              <button
                className="bg-cyan-400 text-2xl text-white w-36 h-20 mb-8"
                type="button"
                onClick={create}
                data-testid="create-button"
              >
                create
              </button>
            </li>
            <li>
              <button
                className="bg-pink-400 text-white text-2xl w-36 h-20"
                type="button"
                onClick={taskDelete}
              >
                Cache Clear
              </button>
            </li>
          </ul>
        </div>
        <div className="basis-2/3">
          <ul className="static text-cyan-400 text-2xl font-bold">
            <li className="px-20">
              <div>
                {tasks[tag].map((t) => (
                  <Taskstore key={t.id} task={t} />
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex"></section>
    </section>
  );
};

export default Tasklist;