import React, { PureComponent } from 'react';
import Header from './Header'
import './App.css';
import Mosaic from './Mosaic';

require('dotenv').config()
class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Mosaic />
      </div>

    );
  }
}

export default App;
