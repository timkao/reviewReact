import React, { Component } from 'react';
import axios from 'axios';

class AddSongForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: 1,
      hasErr: false,
      errMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/songs')
      .then(res => res.data)
      .then(songs => {
        this.setState({ songs });
      })
  }

  handleChange(ev) {
    this.setState({selectedSong: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { playlist, fetchPlayList } = this.props;
    axios.get(`/api/songs/${this.state.selectedSong}`)
    .then(res => res.data)
    .then(song => {
      return axios.post(`api/playlists/${playlist.id}/songs`, song)
    })
    .then(res => res.data)
    .then(song => {
      console.log(`${song.name} is successfully added`);
      fetchPlayList(playlist.id);
    })
    .catch(err => {
      this.setState({
        hasErr: true,
        errMessage: err.message
      })
    })
  }


  render() {

    const { songs, selectedSong, hasErr, errMessage } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="well">
        <form className="form-horizontal" noValidate name="songSelect" onSubmit={ handleSubmit }>
          <fieldset>
            <legend>Add to Playlist</legend>
            <div className="form-group">
              <label htmlFor="song" className="col-xs-2 control-label">Song</label>
              <div className="col-xs-10">
                <select className="form-control" name="song" value={selectedSong} onChange={ handleChange }>
                  {
                    songs.map(song => <option key={song.id} value={song.id}>{song.name}</option>)
                  }
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Song</button>
              </div>
            </div>
          </fieldset>
        </form>
        {
          hasErr && <div className="alert alert-warning">{ errMessage }</div>
        }
      </div>
    )
  }
}

export default AddSongForm;
