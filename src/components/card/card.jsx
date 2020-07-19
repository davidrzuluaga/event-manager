import React from 'react';
import './card.scss';

const Card = props => {
  return (
    <div className="default card">
      {props.title && <h3>{props.title}</h3>}
      <div className="main-content">{props.children}</div>
    </div>
  );
};

export default Card;
