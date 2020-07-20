import React from 'react';
import './chat.scss';
import Input from '../../../components/input/input';

const Chat = props => {
  return (
    <div className="chat">
      <div className="card">
        <p className="title">Nombre de usuario</p>
        <p className="content">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="messages">
        <div className="card reaction">
          <span className="title">Nombre de usuario</span>
          <span className="content">reacted</span>
        </div>
        <div className="card self">
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            aliquet enim tortor at auctor urna. Cursus vitae congue mauris
            rhoncus aenean.
          </p>
          <p className="time">07:59 AM</p>
        </div>
        <div className="card">
          <p className="content">
            <p className="title">Nombre de usuario</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            aliquet enim tortor at auctor urna. Cursus vitae congue mauris
            rhoncus aenean.
          </p>
          <p className="time">07:59 AM</p>
        </div>
      </div>

      <div className="options">
        <Input placeholder="Type a message..." />
      </div>
    </div>
  );
};
export default Chat;
