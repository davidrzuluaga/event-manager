import React from 'react';
import './snackbar.scss';

const Snackbar = props => {
  return (
    <div className={`default snackbar ${props.color}`}>
      {props.information &&
        props.information.map(info => (
          <div className="info">
            <p className="main">{info.main}</p>
            <p className="subtitle">{info.subtitle}</p>
          </div>
        ))}
    </div>
  );
};

export default Snackbar;
