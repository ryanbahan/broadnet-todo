import React, { useState } from 'react';
import { MyContext } from '../Context';
import './ToDoCard.css';

function ToDoCard({ id, title, taskItems }) {
  const [checkedInputs, updateChecked] = useState({id: id, checkedInputs: []});

  function isChecked(item) {
    if (checkedInputs.checkedInputs.find(input => input === item)) {
      return true;
    } else {
      return false;
    }
  }

  function toggleChecked(item) {
    let updatedItems;

    if (checkedInputs.checkedInputs.find(input => input === item)) {
      updatedItems = checkedInputs.checkedInputs.filter(input => input !== item);
    } else {
      updatedItems = [...checkedInputs.checkedInputs, item];
    }

    const updatedInput = {
      id: id,
      checkedInputs: updatedItems,
    }

    updateChecked(updatedInput);
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
            <p className="card-title">{ title }</p>
            <button onClick={() => context.deleteCard(id)}>Delete</button>
          </div>
          <div className="card-list-items">
            <ul>
              {renderTaskItems(taskItems)}
            </ul>
          </div>
        </article>
      )}
    </MyContext.Consumer>
  );
}

export default ToDoCard;
