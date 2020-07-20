import React from 'react';
import './screen.scss';

const Screen = props => {
  const current = props.current;
  return (
    <div className="screen">
      <div className="source">
        <p className="title">{current.title}</p>
        <p className="subtitle">{current.subtitle}</p>
      </div>
      <div
        className="picture"
        style={{ backgroundImage: `url(${current.image})` }}
      ></div>

      <div className="options">
        <div className="screenplay">
          <span class="material-icons">volume_up</span>
          <span class="material-icons">fullscreen</span>
        </div>
      </div>
    </div>
  );
};
export default Screen;
