import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [title, setTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, updateTaskItems] = useState([]);

  function addTask() {
    updateTaskItems([...taskItems, taskItem]);
    setTaskItem("");
  }

  return (
    <form className="form">
      <div className="input-label-container">
      <label for="title">Task title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className="input-label-container">
      <label for="item">Task item</label>
      <div className="input-btn-container">
      <input
        type="text"
        name="item"
        id="item"
        value={taskItem}
        onChange={(e) => setTaskItem(e.target.value)}
      />
      <button
        type="button"
        className="add-item-btn"
        onClick={addTask}
      >
        +
      </button>
      </div>
      </div>
      <button type="button" className="make-task-btn">Make Task List</button>
      <button type="button" className="clear-btn">Clear All</button>
      <hr />
      <button type="button" className="filter-btn">Filter By Urgency</button>
    </form>
  );
}

export default Form;
