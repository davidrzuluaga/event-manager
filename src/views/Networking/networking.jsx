import React from 'react';
import Card from '../../components/card/card';
import './networking.scss';
import moment from 'moment-timezone';

const NetworkingPage = props => {
  const [filterStatus, setFilterStatus] = React.useState('all');

  const statuses = {
    all: 'All',
    waiting: 'Waiting for attendee',
    progress: 'In progress',
    ended: 'Ended'
  };

  const filteredEventAnalytics = () => {
    if (filterStatus !== 'all')
      return props.information.meetings.filter(
        meet => meet.status === filterStatus
      );
    else return props.information.meetings;
  };

  const now = new Date();

  return (
    <div className="network">
      <p className="title">
        Meetings live now{' '}
        <span className="time">
          {moment(now).startOf('hour').tz('America/Denver').format('hh:mm A')} -
          {moment(now).endOf('hour').tz('America/Denver').format('hh:mm A')}
        </span>
      </p>
      <div className="nav">
        {Object.entries(statuses).map((status, i) => (
          <div
            key={i}
            className={`tab ${filterStatus === status[0] && 'selected'}`}
            onClick={() => setFilterStatus(status[0])}
          >
            {status[1]}
          </div>
        ))}
      </div>
      <div className="appointments">
        {filteredEventAnalytics().map((meet, i) => (
          <Card className="appointment">
            <p className="info" key={i}>
              <span className="owner">Meeting schedule by {meet.owner}</span>
              <span className={`status ${meet.status}`}>
                {statuses[meet.status]}
              </span>
            </p>
            <div className="participant">
              <div className="picture">
                <div
                  className="pic"
                  style={{
                    backgroundImage: `url(${meet.attendee.image})`
                  }}
                ></div>
              </div>
              <div className="description">
                <span className="name">{meet.attendee.name}</span>
                <span className="subtitle">{meet.attendee.subtitle}</span>
              </div>
            </div>
            <div className="menu">
              <span class="material-icons">more_vert</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default NetworkingPage;
