import React from 'react';
import SourceForm from './SourceForm';
import Source from './Source';

const Sources = (props) => {
  const sources = props.sources.map((source, i) => {
    return <Source 
      key={i}
      name={source.name} 
      delete={props.delete}
    />
  });

  return (
    <div className="sources">
      <SourceForm add={props.add} /> 
      {sources}
    </div>
  );
}

export default Sources;