import React from 'react';
import './live-activities.scss';
import Chat from '../chat/chat';

const LiveActivitiesPage = props => {
  const current = props.information.activities[props.page.index];
  return (
    <div className="live-activities-page">
      <div className="col" style={{ width: '60%' }}>
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
      </div>
      <div className="col" style={{ width: '35%' }}>
        <Chat />
      </div>
    </div>
  );
};
export default LiveActivitiesPage;
