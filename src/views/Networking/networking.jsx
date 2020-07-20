import React from 'react';
import Card from '../../components/card/card';
import './networking.scss';

const NetworkingPage = props => {
  return (
    <div className="network">
      <p className="title">
        Meetings live now <span className="time">8:00 AM - 9:00 AM</span>
      </p>
      <div className="nav">
        <div className="tab selected">All</div>
        <div className="tab">In Progress</div>
        <div className="tab">Waiting for attendee</div>
        <div className="tab">Ended</div>
      </div>
      <div className="appointments">
        <Card className="appointment">
          <p className="info">
            <span className="owner">
              Meeting schedule by Juan David Castillo
            </span>
            <span className={`status ${'waiting'}`}>Waiting for attendee</span>
          </p>
          <div className="participant">
            <div className="picture">
              <div
                className="pic"
                style={{
                  backgroundImage: `url(${'image/Marius_Ciocirlan.png'})`
                }}
              ></div>
            </div>
            <div className="description">
              <span className="name">Juan David Castillo</span>
              <span className="subtitle">Eventtia Group | Sales team</span>
            </div>
          </div>
          <div className="menu">
            <span class="material-icons">more_vert</span>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default NetworkingPage;
