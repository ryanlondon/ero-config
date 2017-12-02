import React from 'react';

const Room = (props) => {
  return (
    <div className="room">
      <div className="room-header">
        <h3>{props.name}</h3>
        <button onClick={() => {props.deleteRoom(props.name)}}>Delete</button>
      </div>
      <div className="room-body">
        <div className="room-sources">
          <h4>Sources</h4>
          <ul>
            <li>Sonos</li>
            <li>DirecTV</li>
            <li>Bluray</li>
          </ul>
        </div>
        <div className="room-devices">
          <h4>Devices</h4>
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