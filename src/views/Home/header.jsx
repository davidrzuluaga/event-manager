import React from 'react';
import './header.scss';
import moment from 'moment-timezone';

function Header(props) {
  const now = new Date();
  return (
    <header className="top">
      <div className="col col-half" onClick={() => props.setPage({ page: 0 })}>
        {props.page.page !== 0 && (
          <span class="material-icons">keyboard_arrow_left</span>
        )}
        <div className="title">
          <h1>{props.information.title}</h1>
          <p className="subtitle">{props.information.subtitle}</p>
        </div>
      </div>
      <div className="col col-half">
        <p className="localtime">
          Local time is {moment(now).tz('America/Denver').format('hh:mm a z')}
        </p>
      </div>
    </header>
  );
}

export default Header;
