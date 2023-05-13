import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = () => {
    const newTask = { name: title, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTitle("");
    setDeadline(0);
  };

  const completeTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((id) => {
        return id.name !== nameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline(in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="todoList">
        {todoList.map((title: ITask, key: number) => {
          return (
            <TodoTask key={key} task={title} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
