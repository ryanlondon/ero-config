import React from 'react';

const handleSelect = (e) => {
  console.log(e.target.value);
};

const Room = (props) => {

  const sources = props.sources.map((source, i) => {
    return <option key={i} value={source.name}>{source.name}</option>;
  });

  const devices = props.devices.map((device, i) => {
    return <option key={i} value={device.name}>{device.name}</option>;
  });

  return (
    <div className="room">
      <div className="room-header">
        <h3>{props.name}</h3>
        <button className="delete" onClick={() => {props.delete('rooms', props.name)}}>Delete</button>
      </div>
      <div className="room-body">
        <div className="room-sources">
          <h4>Sources</h4>
          <select onChange={handleSelect}>
            <option defaultValue="--" hidden>Add a source</option>
            {sources}
          </select>
          <ul className="room-items">
            <li className="room-item">Sonos<button>Delete</button></li>
            <li className="room-item">DirecTV<button>Delete</button></li>
            <li className="room-item">Bluray<button>Delete</button></li>
          </ul>
        </div>
        <div className="room-devices">
          <h4>Devices</h4>
          <select onChange={handleSelect}>
            <option defaultValue="--" hidden>Add a device</option>
            {devices}
          </select>
          <ul className="room-items">
            <li className="room-item">Climate<button>Delete</button></li>
            <li className="room-item">Security<button>Delete</button></li>
            <li className="room-item">Lights<button>Delete</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Room;