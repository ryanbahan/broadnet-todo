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
        title: "Today's Workout",
        taskItems: ["Bench Press 3x5", "Overhead Lift 5x5", "Squats 5x10"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Grocery List",
        taskItems: ["Bananas", "Broccoli", "Chicken", "Bread", "Milk"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Weekend to-dos",
        taskItems: ["Mow Lawn", "Fix Sink"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Next Week",
        taskItems: ["Apply to Broadnet"]
      },
      {
        id: Date.now() + Math.random(),
        title: "Dev Tasks",
        taskItems: ["Bug fixes", "New Features"]
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
