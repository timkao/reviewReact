import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

  constructor() {
    super();
    this.state = {
      artists: [],
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value})
  }

  render() {

    let { artists, inputValue } = this.state;
    const { handleChange } = this;
    let regex = new RegExp(inputValue, 'gi');
    artists = artists.filter(artist => {
      return artist.name.match(regex) !== null;
    })

    return (
      <div>
        <h3>Artists</h3>
        <form className="form-group" style={{ marginTop: '20px' }}>
          <input
            className="form-control"
            placeholder="Enter artist name"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
