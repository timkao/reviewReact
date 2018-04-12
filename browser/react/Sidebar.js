import React, { Component } from 'react';


class Sidebar extends Component {

  render() {

    const { resetSelectedAlbum } = this.props;

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
}

export default Sidebar;
