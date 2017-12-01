import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Rooms from'./Rooms';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabId: 0,
      rooms: []
    };
    this.setTabId = (id) => {
      this.setState({ tabId: id });
    };
    this.getAllRooms = () => {
      axios.get('/api/rooms').then(res => {
        this.setState({ rooms: res.data });
      });
    }
    this.addRoom = (roomName) => {
      axios.post('/api/rooms', {
        name: roomName,
        eroId: this.state.rooms.length + 1
      })
      .then(() => {
        this.getAllRooms();
      })
      .catch((err) => {
        console.error(err);
      });
    };
  }

  componentDidMount() {
    this.getAllRooms();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header setTabId={this.setTabId} tabId={this.state.tabId} />
          <div className="main">
            <Route path="/" exact render={() => <Rooms rooms={this.state.rooms} addRoom={this.addRoom} />} />
            <Route path="/sources" component={Sources} />
            <Route path="/devices" component={Devices} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Sources = () => {
  return <div>Sources</div>;
}

const Devices = () => {
  return <div>Devices</div>;
}

export default App;