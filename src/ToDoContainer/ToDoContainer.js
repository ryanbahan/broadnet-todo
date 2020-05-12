import React from 'react';
import { MyContext } from '../Context';
import ToDoCard from '../ToDoCard/ToDoCard';
import './ToDoContainer.css';

function ToDoContainer() {

  function displayCards(cards) {
    const columnA = [];
    const columnB = [];

    cards.forEach(card => {
      if (columnA.length > columnB.length) {
        columnB.push(card);
      } else {
        columnA.push(card);
      }
    })

    return (
      <>
        <div className="todo-container-left">
          {generateHTML(columnA)}
        </div>
        <div className="todo-container-right">
          {generateHTML(columnB)}
        </div>
      </>
    )
  }

  function generateHTML(cards) {
    return cards.map(card =>
      <ToDoCard
        key={Date.now() + Math.random()}
        title={card.title}
        taskItems={card.taskItems}
      />
    )
  }

  return (
    <MyContext.Consumer>
      {context => (
        <section className="todo-container">
          {displayCards(context.state.cards)}
        </section>
      )}
    </MyContext.Consumer>
  );
}

export default ToDoContainer;
