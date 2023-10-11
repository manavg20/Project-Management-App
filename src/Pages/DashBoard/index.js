import React from "react";
import TaskForm from '../../Components/TaskForm'

const Dashboard = ({ tasks, onShowModal, showModal, onAddTask, setShowModal}) => {
  const renderTasks = () => {
    if (tasks.length === 0) {
      return (
        <div>
          <p>Please add tasks.</p>
        </div>
      );
    }
    return (
        tasks.map((task, index) => (
      <div style={{border: "1px solid gray", width: "10rem", padding: "10px", margin: "5px", borderRadius: "10px"}} key={index}>
        <h3>Task: {task.task}</h3>
        <p>Assignee: {task.assignee}</p>
        <p>Status: {task.status}</p>
      </div>
    )))
  };

  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: "center"}}>
      <h1>Task Management App</h1>
      <button style={{backgroundColor: "blue", color: "white", width: "max-content", padding: "10px 14px", borderRadius: '12px', border: "none",margin:"15px"}} onClick={onShowModal}>Add Task</button>
      <div style={{display: "flex", flexDirection: 'row', flexWrap: "wrap", gap: "20px"}}>
      {renderTasks()}
      </div>
      {showModal && <TaskForm onAddTask={onAddTask} showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  );
};

export default Dashboard;
