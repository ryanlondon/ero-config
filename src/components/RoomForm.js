import React from 'react';

class RoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };
    this.handleSubmit = (e) => {
      this.props.addRoom(this.state.value);
      this.setState({ value: '' });
      // console.log(e);
      // e.preventDefault();
    };
  }
  render() {
    return (
      <form className="room-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="Add a room" />
        <button type="submit">Add Room</button>
      </form>
    );
  }
}

export default RoomForm;