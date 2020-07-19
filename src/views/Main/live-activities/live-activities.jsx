import React from 'react';
import Card from './../../../components/card/card';
import './live-activities.scss';

const LiveActivities = props => {
  return (
    <Card title="Live Activities" className="live-activities">
      {props.activities &&
        props.activities.map(activity => (
          <>
            <div className="event">
              <div className="time">
                <span>{activity.timerange.start}</span>
                <span>{activity.timerange.end}</span>
              </div>
              <div className="middle">
                <h3>{activity.title}</h3>
                <div className="subtitle">{activity.subtitle}</div>
              </div>
              <div className="attendees">
                <span className="num">{activity.attendees}</span>
                <span className="attendee">Attendees</span>
              </div>
            </div>
          </>
        ))}
    </Card>
  );
};
export default LiveActivities;
