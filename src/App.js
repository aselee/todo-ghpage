import React, { Component } from 'react';
import TodoList from './components/TodoList';
import "./App.css";


// https://www.youtube.com/watch?v=I6IY2TqnPDA
// finished, but active and complete buttons have small issue.
// design site
// add more functionalities 

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
