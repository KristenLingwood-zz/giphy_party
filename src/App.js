import React, { PureComponent } from 'react';
import Header from './Header'
import SearchForm from './SearchForm';
class App extends PureComponent {

  render() {
    return (
      <div>
        <Header />
        <SearchForm />
      </div>

    );
  }
}

export default App;
