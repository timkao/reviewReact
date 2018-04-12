import React from 'react';


function Sidebar (props) {

    const { resetSelectedAlbum } = props;

    return (
      <sidebar>
        <img src="juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <a onClick={resetSelectedAlbum} href="#">ALBUMS</a>
          </h4>
        </section>
      </sidebar>
    )

}

export default Sidebar;
