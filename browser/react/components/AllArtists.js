import React from 'react';
import { Link } from 'react-router-dom';

function AllArtists(props) {

  const { artists } = props;

  return (
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
  )
}

export default AllArtists;
