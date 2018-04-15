import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterInput from './FilterInput';
import AllArtists from './AllArtists';

export default class FilterableArtists extends Component {

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
        <FilterInput handleChange={handleChange} inputValue={inputValue} />
        <AllArtists artists={artists} />
      </div>
    );
  }
}
