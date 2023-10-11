import React, { useState } from "react";
import Modal from "react-modal";

const TaskForm = ({ onAddTask, showModal,setShowModal }) => {
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("Open");

  const handleSubmit = () => {
    if (task && assignee) {
      onAddTask({ task, assignee, status });
      setTask("");
      setAssignee("");
    }
  };

  const closeModal = () => {
    setShowModal(false)
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={showModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Add Task" >
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <h2>Add Task</h2>
      <label >Task:
        <input style={{margin: "5px"}} type="text" width={12} value={task} onChange={(e) => setTask(e.target.value)} />
      </label>
      <label>Assignee:
        <input style={{margin: "5px"}} type="text" width= {12} value={assignee} onChange={(e) => setAssignee(e.target.value)} />
      </label>
      <label>Status:
        <select style={{margin: "5px"}} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <button style={{backgroundColor: "blue", color: "white", width: "max-content", padding: "10px 14px", borderRadius: '12px', border: "none", position: "relative", left: "35%"}} onClick={handleSubmit}>Submit</button>
      </div>
    </Modal>
  );
};

export default TaskForm;
