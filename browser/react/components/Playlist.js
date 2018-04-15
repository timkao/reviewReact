import React, { Component } from 'react';
import Songs from './Songs';
import axios from 'axios';
import AddSongForm from './AddSongForm';

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist: {},
      songs: []
    }
    this.fetchPlayList = this.fetchPlayList.bind(this);
  }

  componentDidMount() {
    this.fetchPlayList(this.props.match.params.playlistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.playlistId !== nextProps.match.params.playlistId) {
      this.fetchPlayList(nextProps.match.params.playlistId);
    }
  }

  fetchPlayList(playlistId) {
    return axios.get(`/api/playlists/${playlistId}`)
    .then(res => res.data)
    .then(playlist => {
      this.setState({playlist: playlist})
    })
  }


  render() {

    const { playlist } = this.state;
    const { fetchPlayList } = this;

    return (
      <div>
        <h3>{playlist.name}</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
        <hr />
        <AddSongForm playlist={playlist} fetchPlayList={fetchPlayList} />
      </div>
    )
  }
}

export default Playlist;
