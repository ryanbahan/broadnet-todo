import React from 'react';
import './Form.css';

function Form() {
  return (
    <form className="form">
      <label for="title">Task title</label>
      <input type="text" name="title" id="title" />
      <label for="item">Task item</label>
      <input type="text" name="item" id="item" />
      <button type="button">+</button>
      <button type="button">Make Task List</button>
      <button type="button">Clear All</button>
      <hr />
      <button type="button">Filter By Urgency</button>
    </form>
  );
}

export default Form;
