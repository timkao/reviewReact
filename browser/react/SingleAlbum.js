import React from 'react';

function SingleAlbum (props) {

    const { album } = props;

    return (
      <div className="album col-xs-10">
        <div>
          <h3>{album.name}</h3>
          <img src={album.imageUrl} className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {
              album.songs && album.songs.map(song => {
                return (
                  <tr key={song.id}>
                    <td>
                      <button className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                    </td>
                    <td>{song.name}</td>
                    <td>{
                          song.artists.reduce((acc, artist) => {
                            return acc + artist.name;
                          }, '')
                    }</td>
                    <td>{song.genre}</td>
                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
    )

}

export default SingleAlbum;
