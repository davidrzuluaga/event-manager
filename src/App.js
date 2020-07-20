import React from 'react';
import './App.scss';
import Mainpage from './views/Main/mainpage';
import Header from './views/Home/header';
import LiveActivitiesPage from './views/LiveActivities/live-activities';
import NetworkingPage from './views/Networking/networking';
import information from './helpers/sample';

function App() {
  const [page, setPage] = React.useState({ page: 0, index: 0 });

  const pages = () => {
    if (page.page === 1) {
      return <LiveActivitiesPage page={page} information={information} />;
    } else if (page.page === 2) {
      return <NetworkingPage page={page} information={information} />;
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
