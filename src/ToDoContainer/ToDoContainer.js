import React from 'react';
import ToDoCard from '../ToDoCard/ToDoCard';
import './ToDoContainer.css';

function ToDoContainer() {
  return (
    <section className="todo-container">
      <div className="todo-container-left">
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </div>
      <div className="todo-container-right">
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </div>
    </section>
  );
}

export default ToDoContainer;
