import React, { Component } from 'react';

class Header extends Component {
  render() {
    const mode = 'train'; // onChange={this.changeModeType} value={mode}
    return (
      <div className="app">
        <h1><a href="https://ml-for-everyone.herokuapp.com/">Image Classifier Training</a> - only made with React</h1>
        
        <select value={mode}>
          <option value="train">train</option>
          <option value="predict">predict</option>
        </select>
      </div>
    );
  }
}

export default Header;
