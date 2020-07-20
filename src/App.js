import React from 'react';
import './App.scss';
import Mainpage from './views/Main/mainpage';
import Header from './views/Home/header';
import LiveActivitiesPage from './views/LiveActivities/screen/live-activities';

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
      title: 'MAKE THE LEAP TO TEACH LEAD',
      subtitle: 'Ryan Cromwell',
      attendees: 800,
      progress: 80,
      image: '/image/Ryan_Cromwell.png'
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      image: '/image/Ryan_Cromwell.png',
      attendees: 800,
      progress: 30
    },
    {
      timerange: { start: '12:00 AM', end: '2:00 PM' },
      title: 'Name of the activity',
      subtitle: 'Evelyn J. Fields | CEO of Stay Green',
      attendees: 800,
      image: '/image/Ryan_Cromwell.png',
      progress: 50
    }
  ]
};

function App() {
  const [page, setPage] = React.useState({ page: 1, index: 0 });

  const pages = () => {
    if (page.page === 1) {
      return <LiveActivitiesPage page={page} information={information} />;
    } else {
      return <Mainpage setPage={setPage} information={information} />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} page={page} information={information} />
      {pages()}
    </div>
  );
}

export default App;
