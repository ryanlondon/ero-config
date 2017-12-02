import React from 'react';
import DeviceForm from './DeviceForm';
import Device from './Device';

const Devices = (props) => {
  const devices = props.devices.map((device, i) => {
    return <Device 
      key={i}
      name={device.name} 
      delete={props.delete}
    />
  });

  return (
    <div className="devices">
      <DeviceForm add={props.add} /> 
      {devices}
    </div>
  );
}

export default Devices;