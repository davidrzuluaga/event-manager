import React from 'react';
import Card from './../../../components/card/card';
import './networking.scss';
import { Doughnut } from 'react-chartjs-2';

const Networking = props => {
  const data = canvas => {
    return {
      labels: ['Scheduled', 'Completed', 'Pending', 'Rejected'],
      datasets: [
        {
          label: 'Attendees',
          data: [300, 50, 100, 12],
          backgroundColor: ['#851486', '#22d2b9', '#f4ac33', '#f23d4f'],
          hoverBackgroundColor: ['#851486', '#22d2b9', '#f4ac33', '#f23d4f']
        }
      ]
    };
  };
  return (
    <Card title="Networking" className="networking">
      <div className="chart">
        <Doughnut
          data={data}
          width={50}
          height={300}
          options={{
            legend: { display: true, position: 'left' },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              xAxes: [{ display: false }],
              yAxes: [{ display: false }]
            }
          }}
        />
      </div>
      <div className="numbers">
        <div className="item">
          <span className="num">20</span>
          <span className="subtitle">Meetings live now</span>
        </div>
        <div className="item">
          <span className="num">43</span>
          <span className="subtitle">Attendees in meetings</span>
        </div>
      </div>
      <div className="bottom">
        <p onClick={() => props.setPage({ page: 2 })}>
          <span>View meetings live now</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </p>
      </div>
    </Card>
  );
};
export default Networking;
