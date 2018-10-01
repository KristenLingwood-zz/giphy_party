import React, { PureComponent } from 'react';
import config from 'react-global-configuration';
import axios from 'axios';

const { REACT_APP_GIPHY_API_KEY } = config;
class SearchForm extends PureComponent {
  state = {
    value: '',
    giphys: []
  };

  handleSearchBoxChange = (event) => {
    this.setState({ value: event.target.value });
  }
  handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('...searching')
    this.getGiphys();
    this.setState({ value: '' })
  }

  getGiphys = async () => {
    try {
      this.setState({ message: 'collecting giphy RSVPs...' })
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${this.state.value}`, {
        headers: {
          api_key: REACT_APP_GIPHY_API_KEY,
        }
      })
      const giphys = response.map(gif => gif.url)
      this.setState({ ...this.state, giphys: giphys })
    } catch (error) {
      window.alert('Sorry, there was a problem fetching giphys.', error)
    }
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSearchSubmit}>
        <label>
          <input className="form-control mr-sm-2" type="text" placeholder="Find me some giphys!" value={this.state.value} onChange={this.handleSearchBoxChange} />
        </label>
        <input className="btn btn-secondary my-2 my-sm-0" type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchForm