import React from 'react';
import './ToDoCard.css';

function ToDoCard() {
  return (
    <article className="todo-card">
      <div className="card-top">
        <p>Task Title</p>
      </div>
      <div className="card-list-items">
        <ul>
          <li><input type="checkbox" /> item a</li>
          <li><input type="checkbox" /> item b</li>
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
