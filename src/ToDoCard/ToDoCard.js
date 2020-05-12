import React from 'react';
import './ToDoCard.css';

function ToDoCard({ title, taskItems }) {

  function renderTaskItems(taskItems) {
    return taskItems.map(item => (
      <li key={Date.now() + Math.random()}>{item}</li>
    ))
  }

  return (
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
  );
}

export default ToDoCard;
