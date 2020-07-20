import React from 'react';
import './live-activities.scss';
import Chat from './chat/chat';
import Screen from './screen/screen';

const LiveActivitiesPage = props => {
  const current = props.information.activities[props.page.index];
  return (
    <div className="live-activities-page">
      <div className="col" style={{ width: '60%' }}>
        <Screen current={current} />
      </div>
      <div className="col" style={{ width: '35%' }}>
        <Chat current={current} />
      </div>
    </div>
  );
};
export default LiveActivitiesPage;
