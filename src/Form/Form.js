import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form">
      <div className="input-label-container">
      <label for="title">Task title</label>
      <input type="text" name="title" id="title" />
      </div>
      <div className="input-label-container">
      <label for="item">Task item</label>
      <div className="input-btn-container">
      <input type="text" name="item" id="item" />
      <button type="button" className="add-item-btn">+</button>
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
