import React, { useState, useEffect } from "react";
import TaskForm from "../src/Components/TaskForm";
import Dashboard from "../src/Pages/DashBoard";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasksFromStorage);
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowModal(false);
  };

  return (
    <div>
      <Dashboard tasks={tasks} onShowModal={() => setShowModal(true)} showModal={showModal} onAddTask={addTask} setShowModal={setShowModal} />
      {/* {showModal && <TaskForm onAddTask={addTask} />} */}
    </div>
  );
};

export default App;
