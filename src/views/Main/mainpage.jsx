import React from 'react';
import Snackbar from '../../components/snackbar/snackbar';
import LiveActivities from './live-activities/live-activities';
import ActiveAttendees from './active-attendees/active-attendees';

const information = {
  title: 'Live Event Analytics',
  subtitle: 'Ipsum Event 2020',
  snacks: [
    {
      content: [{ main: '12.043', subtitle: 'Registered attendees' }],
      color: 'darkmagenta'
    },
    {
      content: [
        { main: '6.320', subtitle: 'Attendees online' },
        { main: '56%', subtitle: 'Attendance' }
      ],
      color: 'lightseagreen'
    }
  ],
  activities: [
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      attendees: 800,
      progress: 80
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      attendees: 800,
      progress: 30
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      attendees: 800,
      progress: 50
    }
  ]
};

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="top">
        <div className="left">
          <h1>{information.title}</h1>
          <p className="subtitle">{information.subtitle}</p>
        </div>
        <div className="rigth">
          <p className="localtime">Local time is 8:50 am EST</p>
        </div>
      </div>
      <div className="left">
        {information.snacks.map(info => (
          <Snackbar information={info.content} color={info.color} />
        ))}
        <ActiveAttendees />
      </div>
      <div className="rigth">
        <LiveActivities activities={information.activities} />
      </div>
    </div>
  );
};
export default Mainpage;
