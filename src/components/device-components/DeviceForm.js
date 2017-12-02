import React from 'react';

class DeviceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    this.handleSubmit = (e) => {
      this.props.add('devices', this.state.value);
      this.setState({ value: '' });
      this.input.value = '';
      e.preventDefault();
    };
  }

  render() {
    return (
      <form className="form device-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          ref={(input) => {this.input = input}} 
          type="text" 
          placeholder="Add a device" 
        />
        <button type="submit">Add Device</button>
      </form>
    );
  }
}

export default DeviceForm;