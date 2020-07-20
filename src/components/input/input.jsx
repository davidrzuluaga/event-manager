import React from 'react';
import './input.scss';

const Input = props => {
  return (
    <div className={`input ${props.className || ''} `}>
      <input {...props}>{props.children}</input>
      <span className="material-icons">send</span>
    </div>
  );
};
export default Input;
