import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    cards: [{title: "Default Card", taskItems: ["Land this job!", "eat sushi"]}]
  }

  addCard = (card) => {
    this.setState({cards: [...this.state.cards, card]});
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, addCard: this.addCard}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
