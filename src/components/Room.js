import React from 'react';

const Room = (props) => {
  return (
    <div className="room">
      <div className="room-header">
        <h3>{props.name}</h3>
      </div>
      <div className="room-body">
        <div className="room-sources">
          <ul>
            <li>Sonos</li>
            <li>DirecTV</li>
            <li>Bluray</li>
          </ul>
        </div>
        <div className="room-devices">
          <ul>
            <li>Climate</li>
            <li>Lighting</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Room;