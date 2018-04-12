import React from 'react';

function AllAlbums (props) {

    const { albums, handleClick } =  props;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map((album) => {
            return (
              <div className="col-xs-4" key={album.id}>
                <a className="thumbnail" onClick={() => handleClick(album.id)} href="#">
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length}</small>
                  </div>
                </a>
              </div>
            )
          })
        }

        </div>
      </div>
    )

}

export default AllAlbums;
