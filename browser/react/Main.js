import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AllAlbums from './AllAlbums';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

//const audio = document.createElement('audio');

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetSelectedAlbum = this.resetSelectedAlbum.bind(this);
    //this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    axios.get('/api/albums')
    .then(result => result.data)
    .then(data => {
      this.setState(prevState => {
        prevState.albums = data;
      })
    });
  }

  handleClick(albumId) {
    axios.get(`/api/albums/${albumId}`)
    .then(result => result.data)
    .then(data => {
      this.setState(prevState => {
        prevState.selectedAlbum = data;
      })
    })
  }

  resetSelectedAlbum() {
    this.setState(prevState => {
      prevState.selectedAlbum = {};
    })
  }

  // playAudio(songId) {
  //   axios.get('api/songs/' + songId + '/audio')
  //   .then(result => result.data)
  //   .then(data => {
  //     audio.src = data;
  //     audio.load();
  //     audio.play();
  //   })
  // }

  render() {

    const { albums, selectedAlbum } = this.state;
    const { handleClick, resetSelectedAlbum, playAudio } = this;


    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar resetSelectedAlbum={resetSelectedAlbum} />
        </div>
        <div className="col-xs-10">
          {
            Object.keys(selectedAlbum).length === 0
            ? <AllAlbums albums={albums} handleClick={handleClick} />
            : <SingleAlbum album={selectedAlbum} />
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
