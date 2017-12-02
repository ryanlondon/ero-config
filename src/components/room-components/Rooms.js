import React from 'react';
import RoomForm from './RoomForm';
import Room from './Room';

const Rooms = (props) => {
  const rooms = props.rooms.map((room, i) => {
    return <Room 
      key={i}
      name={room.name} 
      deleteRoom={props.deleteRoom}
    />
  });

  return (
    <div className="rooms">
      <RoomForm addRoom={props.addRoom} /> 
      {rooms}
    </div>
  );
}

export default Rooms;