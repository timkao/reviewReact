import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Albums from '../components/Albums.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

export default class Main extends Component {

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={Albums} />
              <Route path="/albums/:albumId" component={Album} />
              <Route component={Albums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
