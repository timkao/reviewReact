import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlayList from './NewPlayList';
import axios from 'axios';
import Playlist from './Playlist';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {playlists: []}
    this.addList = this.addList.bind(this);
  }

  componentDidMount() {
    axios.get('/api/playlists')
    .then(result => result.data)
    .then(playlists => {
      this.setState(prevState => {
        prevState.playlists = playlists;
      })
    })
  }

  addList(listName) {
    return axios.post('/api/playlists', {name: listName })
    .then(res => res.data)
    .then(result => {
      return axios.get('/api/playlists')
    })
    .then(result => result.data)
    .then(newlists => {
      this.setState(prevState => {
        prevState.playlists = newlists;
      })
    })
  }

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/newplaylist" render={() => <NewPlayList addList={this.addList} />} />
              <Route path="/playlists/:playlistId" component={Playlist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
