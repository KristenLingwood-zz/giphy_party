import React, { PureComponent } from 'react';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleSearchBoxChange = (event) => {
    this.setState({ value: event.target.value });
  }
  handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('...searching')
    this.setState({ value: '' })
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSearchSubmit}>
        <label>
          <input className="form-control mr-sm-2" type="text" placeholder="Find me some giphys!" type="text" value={this.state.value} onChange={this.handleSearchBoxChange} />
        </label>
        <input className="btn btn-secondary my-2 my-sm-0" type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchForm