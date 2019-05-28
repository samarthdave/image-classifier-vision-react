import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import Camera from './components/Camera';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'train'
    };
  }

  componentDidMount() {
    document.title = 'ML for Everyone';
  }

  onChangeSelect = (e) => {
    const { value:selected } = e.target;
    
    this.setState({
      mode: selected
    }, () => {
      this.props.history.push(`/${selected}`);
    });
  }

  render() {
    const headerProps = {
      mode: this.state.mode,
      onChangeSelect: this.onChangeSelect
    };
    
    return (
      <div className="app">
        <Header {...headerProps} />
        <Camera />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);