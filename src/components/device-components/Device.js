import React from 'react';

const Device = (props) => {
  return (
    <div className="item device">
      <h3>{props.name}</h3>
      <button className="delete" onClick={() => {props.delete('devices', props.name)}}>Delete</button>
    </div>
  );
}

export default Device;