import React from 'react';
import RoomForm from './RoomForm';
import Room from './Room';

const Rooms = (props) => {
  const rooms = props.rooms.map((room, i) => {
    return <Room 
      key={i}
      name={room.name}
      sources={props.sources}
      devices={props.devices}
      delete={props.delete}
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