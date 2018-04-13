import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllArtist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    axios.get('/api/artists')
    .then(res => res.data)
    .then(artists => {
      this.setState({ artists })
    });
  }

  render() {

    const { artists } = this.state;

    return (
      <div>
        <h3>Artists</h3>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default AllArtist;
