import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Rooms from './room-components/Rooms';
import Sources from './source-components/Sources';
// import Devices from './device-components/Devices';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabId: 0,
      rooms: [],
      sources: [],
      devices: [],
    };

    this.setTabId = (id) => {
      this.setState({ tabId: id });
    };

    this.getAll = (route) => {
      axios.get('/api/' + route).then(res => {
        this.setState({ [route]: res.data });
      });
    };

    this.addRoom = (roomName) => {
      axios.post('/api/rooms', {
        name: roomName,
      })
      .then(() => {
        this.getAll('rooms');
      })
      .catch((err) => {
        console.error(err);
      });
    };

    this.deleteRoom = (roomName) => {
      axios.delete('api/rooms', {
        params: { name: roomName },
      })
      .then(() => {
        this.getAll('rooms');
      })
      .catch((err) => {
        console.error(err);
      });
    };
    
    this.addSource = (sourceName) => {
      axios.post('api/sources', {
        name: sourceName,
      })
      .then(() => {
        this.getAll('sources');
      })
      .catch((err) => {
        console.error(err);
      });
    };
  }

  componentDidMount() {
    this.getAll('rooms');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header setTabId={this.setTabId} tabId={this.state.tabId} />
          <div className="main">
            <Route path="/" exact 
              render={() => (
                <Rooms 
                  rooms={this.state.rooms} 
                  addRoom={this.addRoom} 
                  deleteRoom={this.deleteRoom}
                />
              )} 
            />
            <Route path="/sources" exact
              render={() => (
                <Sources 
                  sources={this.state.sources}
                  addSource={this.addSource}
                  deleteSource={this.deleteSource}
                />
              )}
            />
            <Route path="/devices" component={Devices} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Devices = () => {
  return <div>Devices</div>;
}

export default App;