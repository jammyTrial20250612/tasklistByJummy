import { useEffect, useState } from "react";
import { useTask } from "../../../context";
import { StoredTask } from "../../../types";
import TaskDetail from "./TaskDetail";

type Props = { task: StoredTask };
const Taskstore: React.FC<Props> = ({ task }) => {
  /* ----- context ----- */
  const tasks = useTask();
  const [style, setstyle] = useState("");

  const taskDelete = () => {
    tasks.delete(task.id, task.tag);
  };

  useEffect(() => {
    task.check === true
      ? setstyle("bg-yellow-200 text-red-400")
      : setstyle("text-cyan-400");
  }, [task.check]);

  return (
    <section className={`bg-white m-5 ${style}`}>
      <div>
        <ul className="text-2xl font-bold">
          <li className="h-20">
            <div data-testid="task" className="flex flex-row space-x-10">
              <div className="text-center py-2 w-16 md:w-full">
                <p>id</p>
                {task.id}
              </div>
              <div className={`text-center w-32 py-1 md:w-full truncate`}>
                <p>title</p>
                {task.title}
              </div>
              <div className={`text-center w-32 py-1 md:w-full truncate`}>
                <p>content</p>
                {task.content}
              </div>
              <div className="text-center w-24 py-6 md:w-full">
                <span className="w-full">
                  {task.check ? "complete" : "no clear"}
                </span>
              </div>
              <div className="text-center w-32">
                <TaskDetail task={task} />
              </div>
              <div>
                <button
                  className="bg-red-400 text-white px-2 py-2 m-4"
                  type="button"
                  onClick={taskDelete}
                  data-testid="delete-button"
                >
                  delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Taskstore;
