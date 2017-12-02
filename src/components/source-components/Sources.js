import React from 'react';
import SourceForm from './SourceForm';
import Source from './Source';

const Sources = (props) => {
  const sources = props.sources.map((source, i) => {
    return <Source 
      key={i}
      name={source.name} 
      deleteSource={props.deleteSource}
    />
  });

  return (
    <div className="sources">
      <SourceForm addSource={props.addSource} /> 
      {sources}
    </div>
  );
}

export default Sources;