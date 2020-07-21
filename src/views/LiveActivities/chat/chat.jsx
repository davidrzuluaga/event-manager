import React from 'react';
import './chat.scss';
import Input from '../../../components/input/input';
import moment from 'moment-timezone';

const Chat = props => {
  return (
    <div className="chat">
      <div className="card">
        <p className="title">{props.information.user.name}</p>
        <p className="content">{props.information.user.description}</p>
      </div>
      <div className="messages">
        {props.current.comments &&
          props.current.comments.map((comment,i) => (
            <div key={i}
              className={`card ${comment.type} ${comment.self ? 'self' : ''}`}
            >
              <p className="content">
                {(!comment.self || comment.type === 'reaction') && (
                  <span className="title">{comment.name}</span>
                )}
                <span className="content">
                  {comment.type === 'reaction' && 'reacted'} {comment.message}
                </span>
              </p>
              {!comment.self && (
                <p className="time">
                  {moment(comment.time).tz('America/Denver').format('hh:mm a ')}
                </p>
              )}
            </div>
          ))}
      </div>

      <div className="options">
        <Input placeholder="Type a message..." />
      </div>
    </div>
  );
};
export default Chat;
