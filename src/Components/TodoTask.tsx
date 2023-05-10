import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(nameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.name}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.name);
        }}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default TodoTask;
