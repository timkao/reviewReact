import React from 'react';
import { Link } from 'react-router-dom';

function AllAlbums(props) {

  const { albums } = props;

  return (
      <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={album.id}>
              <Link to={`/albums/${album.id}`}>
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>{album.songs.length} songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
  );

}

export default AllAlbums;
