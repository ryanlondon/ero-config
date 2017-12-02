import React from 'react';

class RoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    this.handleSubmit = (e) => {
      this.props.add('rooms', this.state.value);
      this.setState({ value: '' });
      this.input.value = '';
      e.preventDefault();
    };
  }

  render() {
    return (
      <form className="form room-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          ref={(input) => {this.input = input}} 
          type="text" 
          placeholder="Add a room" 
        />
        <button type="submit">Add Room</button>
      </form>
    );
  }
}

export default RoomForm;