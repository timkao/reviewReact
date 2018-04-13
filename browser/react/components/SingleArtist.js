import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums';
import { Route, Link } from 'react-router-dom';

class SingleArtist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      albums: [],
      songs: []
    }
  }

  componentDidMount() {
    const artistId = this.props.match.params.artistId;

    axios.get(`/api/artists/${artistId}`)
    .then(result => result.data)
    .then(artist => {
      this.setState({artist: artist});
      return axios.get(`/api/artists/${artistId}/albums`)
    })
    .then(result => result.data)
    .then(albums => {
      this.setState({albums: albums});
      return axios.get(`/api/artists/${artistId}/songs`)
    })
    .then(result => result.data)
    .then(songs => {
      this.setState({songs: songs})
    })
    .catch(err => console.log(err));

  }

  render() {

    const { artist, albums, songs } = this.state;

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>

        <Route path={`/artists/${artist.id}/albums`} render={(routeProps) => <AllAlbums albums={albums} />} />
        <Route path={`/artists/${artist.id}/songs`} render={(routeProps) => <Songs songs={songs} />} />
      </div>
    );
  }
}

export default SingleArtist;
