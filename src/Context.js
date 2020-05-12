import React from 'react';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
  }

  update = (item) => {
    this.setState(item);
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, update: this.update}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
