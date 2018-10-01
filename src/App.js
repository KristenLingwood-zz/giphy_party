import React, { PureComponent } from 'react';
import Header from './Header'
import SearchForm from './SearchForm';
import './app.css'
class App extends PureComponent {

  render() {
    return (
      <div className='app'>
        <Header />
        <SearchForm />
      </div>

    );
  }
}

export default App;
