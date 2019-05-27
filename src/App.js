import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'train'
    };
  }

  componentDidMount() {
    document.title = 'ML for Everyone';
  }

  render() {
    // const Children = this.props.children;
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;