import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import Task from "./Task";

export const Header = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(title, description);

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArr);
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">ADD</button>
      </form>

      {/* Rendering tasks */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};
