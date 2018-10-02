import React, { PureComponent } from 'react';
import Header from './Header'
import GiphySection from './GiphySection';
import './app.css'
class App extends PureComponent {

  render() {
    return (
      <div className='app'>
        <Header />
        <GiphySection />
      </div>

    );
  }
}

export default App;
