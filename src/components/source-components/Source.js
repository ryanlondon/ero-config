import React from 'react';

const Source = (props) => {
  return (
    <div className="source">
      <h3>{props.name}</h3>
      <button onClick={() => {props.deleteSource(props.name)}}>Delete</button>
    </div>
  );
}

export default Source;