import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  };
}

export default App;
