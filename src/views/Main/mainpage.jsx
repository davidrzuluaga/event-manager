import React from 'react';
import Snackbar from '../../components/snackbar/snackbar';
import LiveActivities from './live-activities/live-activities';
import ActiveAttendees from './active-attendees/active-attendees';
import Networking from './networking/networking';
import Announcements from './anouncements/announcements';

const Mainpage = props => {
  return (
    <div className="mainpage">
      <div className="col col-half">
        {props.information.snacks.map((info, i) => (
          <Snackbar key={i} information={info.content} color={info.color} />
        ))}
        <ActiveAttendees />
        <Announcements />
      </div>
      <div className="col col-half">
        <LiveActivities
          setPage={props.setPage}
          activities={props.information.activities}
        />
        <Networking setPage={props.setPage} />
      </div>
    </div>
  );
};
export default Mainpage;
