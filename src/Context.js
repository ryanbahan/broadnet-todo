import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    cards: [
      {
        id: Date.now() + Math.random(),
        title: "Default Card",
        taskItems: ["Land this job!", "eat sushi"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Default Card",
        taskItems: ["Land this job!", "eat sushi"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Default Card",
        taskItems: ["Land this job!", "eat sushi"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Default Card",
        taskItems: ["Land this job!", "eat sushi"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Default Card",
        taskItems: ["Land this job!", "eat sushi"]
      },
    ]
  }

  addCard = (card) => {
    this.setState({cards: [...this.state.cards, card]});
  }

  deleteCard = (id) => {
    const updatedCards = this.state.cards.filter(card => card.id !== id);
    this.setState({cards: updatedCards});
  }

  render() {
    return (
      <MyContext.Provider value={
        {
          state: this.state,
          addCard: this.addCard,
          deleteCard: this.deleteCard
        }
      }>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
