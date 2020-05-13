import React from 'react';
import { data } from './mockToDoData';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    if (!sessionStorage.getItem('broadnet-todo')) {
      sessionStorage.setItem('broadnet-todo', JSON.stringify(data));
    }
    const cards = JSON.parse(sessionStorage.getItem('broadnet-todo'));
    this.setState({cards: cards});
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
