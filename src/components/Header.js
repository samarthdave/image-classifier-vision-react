import React from 'react';

const Header = (props) => {
  const {
    mode,
    onChangeSelect
  } = props;

  let modeOutput = '';
  if(mode === 'train') {
    modeOutput = 'Training';
  } else if(mode === 'predict') {
    modeOutput = 'Prediction';
  }

  return (
    <div className="header">
      <h1><a href="https://ml-for-everyone.herokuapp.com/">Image Classifier {modeOutput}</a> <span className="subtitle">made with React</span></h1>
      
      <select value={mode} onChange={onChangeSelect}>
        <option value="train">train</option>
        <option value="predict">predict</option>
      </select>
    </div>
  );
};

export default Header;
