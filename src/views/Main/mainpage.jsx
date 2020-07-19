import React from 'react';
import Card from './../../components/card/card';
import Snackbar from '../../components/snackbar/snackbar';

const information = {
  snack1: [{ main: '12.043', subtitle: 'Registered attendees' }],
  snack2: [
    { main: '6.320', subtitle: 'Attendees online' },
    { main: '56%', subtitle: 'Attendance' }
  ]
};

const Mainpage = () => {
  return (
    <div className="mainpage">
      <h1>Live Event Analytics</h1>
      <p className="subtitle">Ipsum Event 2020</p>
      <Snackbar information={information.snack1} color={'darkmagenta'} />
      <Snackbar information={information.snack2} color={'lightseagreen'} />
      <Card title="Active attendees">
        <p>Holi</p>
      </Card>
    </div>
  );
};
export default Mainpage;
