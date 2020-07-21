import React from 'react';
import './snackbar.scss';

const Snackbar = props => {
  return (
    <div className={`default snackbar ${props.color}`}>
      {props.information &&
        props.information.map((info, i) => (
          <div className="info" key={i}>
            <p className="main">{info.main}</p>
            <p className="subtitle">{info.subtitle}</p>
          </div>
        ))}
    </div>
  );
};

export default Snackbar;
