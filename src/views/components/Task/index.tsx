import Tasklist from "./Tasklist";
import React from "react";
import { Tag } from "../../../types";

type Props = { tag: Tag };

const Task: React.FC<Props> = ({ tag }) => {
  return (
    <>
      <section>
        <Tasklist tag={tag} />
      </section>
      <section>
        <h4 className="text-green-300 bg-green-100 text-center py-10 text-2xl font-bold">
          {tag.toUpperCase()}
        </h4>
      </section>
    </>
  );
};

export default Task;
