import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleAlbum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount() {
    const { albumId } = this.props.match.params;
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => this.setState({
      selectedAlbum: album
    }));
  }

  render () {

    const { selectedAlbum } = this.state;

    return (
      <div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={selectedAlbum.songs} />
      </div>
    );
  }
}
