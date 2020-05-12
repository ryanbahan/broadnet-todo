import React, { useState } from 'react';
import { MyContext } from '../Context';
import './Form.css';

function Form() {
  const [title, setTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, updateTaskItems] = useState([]);
  const [formError, updateFormError] = useState(false);

  function addTask() {
    if (taskItem.length) {
      updateTaskItems([...taskItems, taskItem]);
      setTaskItem("");
      updateFormError(false);
    } else {
      updateFormError("Please fill out the field before submitting.");
    }
  }

  function clearAll() {
    setTitle("");
    setTaskItem("");
    updateTaskItems([]);
    updateFormError(false);
  }

  function createTaskCard(createCard) {
    if (title.length && taskItems.length) {
      const taskCard = {
        id: Date.now() + Math.random(),
        title: title,
        taskItems: taskItems,
      }
      createCard(taskCard);
      clearAll();
    } else {
      updateFormError("Please fill out all required fields.");
    }
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
            Clear Task Items
          </button>
          {formError && <div>{formError}</div>}
        </form>
      )}
    </MyContext.Consumer>
  );
}

export default Form;
