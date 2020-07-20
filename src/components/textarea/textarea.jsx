import React from 'react';
import './textarea.scss';

const Textarea = props => {
  return (
    <textarea {...props} className={`textarea ${props.className || ''}`}>
      {props.children}
    </textarea>
  );
};
export default Textarea;
