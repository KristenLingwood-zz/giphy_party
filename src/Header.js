import React, { PureComponent } from 'react';
import './header.css'

class Header extends PureComponent {
  clearGifs = () => {
    window.location.reload();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Giphy Rocks!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={this.clearGifs}>Clear my Giphys</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header