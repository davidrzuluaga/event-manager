import React from 'react';
import Card from './../../../components/card/card';
import './active-attendees.scss';
import { Line } from 'react-chartjs-2';

const ActiveAttendees = props => {
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, '#23DBC1AD');
    gradient.addColorStop(1, '#25EFD300');
    return {
      labels: ['6 AM', '8 AM', '10 AM', '12 M', '2 PM', '4 PM', '6 PM'],
      datasets: [
        {
          label: 'Attendees',
          data: [65, 59, 80, 81, 56, 55, 10],
          backgroundColor: gradient,
          borderColor: '#22D2B9',
          borderWidth: 2,
          pointColor: '#fff',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#fff',
          pointHoverBorderWidth: 1,
          pointHoverRadius: 5,
          pointRadius: 1
        }
      ],
      backgroundColor: gradient
    };
  };
  return (
    <Card title="Active Attendees" className="active-attendees">
      <Line
        data={data}
        //width={100}
        height={300}
        options={{
          maintainAspectRatio: false,
          elements: { line: { tension: 0 } },
          scales: {
            xAxes: [{ gridLines: { color: '#bfbfbf1a' } }],
            yAxes: [{ gridLines: { color: '#bfbfbf1a' } }]
          }
        }}
      />
    </Card>
  );
};
export default ActiveAttendees;
