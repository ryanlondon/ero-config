import React from 'react';

const Room = (props) => {

  console.log(props.subscribedSources, props.subscribedDevices);

  const sources = props.sources.map((source, i) => {
    return <option key={i} value={source.name}>{source.name}</option>;
  });

  const devices = props.devices.map((device, i) => {
    return <option key={i} value={device.name}>{device.name}</option>;
  });

  const subscribedSources = props.subscribedSources.map((source, i) => {
    return <li key={i} className="room-item">{source.name}<button>Delete</button></li>
  });

  const subscribedDevices = props.subscribedDevices.map((device, i) => {
    return <li key={i} className="room-item">{device.name}<button>Delete</button></li>
  });

  const handleSelect = (e, type) => {
    props.subscribe(type, props.name, e.target.value);
  };

  return (
    <div className="room">
      <div className="room-header">
        <h3>{props.name}</h3>
        <button className="delete" onClick={() => {props.delete('rooms', props.name)}}>Delete</button>
      </div>
      <div className="room-body">
        <div className="room-sources">
          <h4>Sources</h4>
          <select onChange={(e) => {handleSelect(e, 'sources')}}>
            <option defaultValue="--" hidden>Add a source</option>
            {sources}
          </select>
          <ul className="room-items">
            {subscribedSources}
          </ul>
        </div>
        <div className="room-devices">
          <h4>Devices</h4>
          <select onChange={(e) => {handleSelect(e, 'devices')}}>
            <option defaultValue="--" hidden>Add a device</option>
            {devices}
          </select>
          <ul className="room-items">
            {subscribedDevices}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Room;