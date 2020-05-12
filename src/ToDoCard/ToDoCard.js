import React, { useState } from 'react';
import { MyContext } from '../Context';
import './ToDoCard.css';

function ToDoCard({ title, taskItems }) {
  const [checkedInputs, updateChecked] = useState([]);

  function isChecked(item) {
    if (checkedInputs.find(input => input === item)) {
      return true;
    } else {
      return false;
    }
  }

  function toggleChecked(item) {
    if (checkedInputs.find(input => input === item)) {
      updateChecked(checkedInputs.filter(input => input !== item));
    } else {
      updateChecked([...checkedInputs, item]);
    }
  }

  function renderTaskItems(taskItems) {
    return taskItems.map(item => (
      <div className="list-row">
        <input
          type="checkbox"
          defaultChecked={() => isChecked(item)}
          onClick={() => toggleChecked(item)}
        />
        <li key={Date.now() + Math.random()}>{item}</li>
      </div>
    ))
  }

  return (
    <MyContext.Consumer>
      {context => (
        <article className="todo-card">
          <div className="card-top">
            <p>{ title }</p>
          </div>
          <div className="card-list-items">
            <ul>
              {renderTaskItems(taskItems)}
            </ul>
          </div>
          <div className="card-bottom">
            <button>Urgent</button>
            <button>Delete</button>
          </div>
        </article>
      )}
    </MyContext.Consumer>
  );
}

export default ToDoCard;
