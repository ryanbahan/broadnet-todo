import React, { useState } from 'react';
import { MyContext } from '../Context';
import './Form.css';

function Form() {
  const [title, setTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, updateTaskItems] = useState([]);

  function addTask() {
    updateTaskItems([...taskItems, taskItem]);
    setTaskItem("");
  }

  function clearAll() {
    setTitle("");
    setTaskItem("");
    updateTaskItems([]);
  }

  function createTaskCard(createCard) {
    const taskCard = {
      id: Date.now() + Math.random(),
      title: title,
      taskItems: taskItems,
    }
    createCard(taskCard);
    clearAll();
  }

  function getTaskItems() {
    return taskItems.map(item => <li key={Date.now() + Math.random()}>{item}</li>)
  }

  return (
    <MyContext.Consumer>
      {context => (
        <form className="form">
          <div className="input-label-container">
          <label htmlFor="title">Task title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>
          <div className="task-items">
            <ul>
              {getTaskItems()}
            </ul>
          </div>
          <div className="input-label-container">
          <label htmlFor="item">Task item</label>
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
          <button
            type="button"
            className="make-task-btn"
            onClick={() => createTaskCard(context.addCard)}
          >
            Make Task List
          </button>
          <button
            type="button"
            className="clear-btn"
            onClick={clearAll}
          >
            Clear All
          </button>
        </form>
      )}
    </MyContext.Consumer>
  );
}

export default Form;
