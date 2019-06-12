import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import QuerySettings from './components/QuerySettings';
import Camera from './components/Camera';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // change mode based on current url "/train" or "/predict"
    let mode = props.location.pathname.slice(1).startsWith('train') ? 'train' : 'predict';
    
    this.state = {
      mode,
      iterationName: '',
      projectId: '',
      trainingApiKey: '',
      predictionApiKey: ''
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
      this.props.history.push({
        pathname: `/${selected}`,
        query: this.props.location.query
      });
    });
  }

  // getSearchPath = () => {

  // }

  onQueryChange = (e) => {
    // const { mode } = this.state;
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }, () => {
      // this.props.history.push({
      //   pathname: `/${mode}`,
      //   search: '?color=blue'
      // })
    });
  }

  render() {
    const headerProps = {
      mode: this.state.mode,
      onChangeSelect: this.onChangeSelect
    };

    const QueryProps = {
      ...this.state,
      onQueryChange: this.onQueryChange
    };
    
    return (
      <div className="app">
        <Header {...headerProps} />
        <QuerySettings {...QueryProps} />
        <Camera />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);