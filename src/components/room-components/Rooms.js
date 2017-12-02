import React from 'react';
import RoomForm from './RoomForm';
import Room from './Room';

const Rooms = (props) => {
  const rooms = props.rooms.map((room, i) => {
    return <Room 
      key={i}
      name={room.name}
      delete={props.delete}
      subscribedSources={room.sources}
      subscribedDevices={room.devices}
      sources={props.sources}
      devices={props.devices}
      subscribe={props.subscribe}
      unsubscribe={props.unsubscribe}
    />
  });

  return (
    <div className="rooms">
      <RoomForm add={props.add} /> 
      {rooms}
    </div>
  );
}

export default Rooms;