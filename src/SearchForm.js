import React, { PureComponent } from 'react';
import config from 'react-global-configuration';
import axios from 'axios';
import Mosaic from './Mosaic';

require('dotenv').config()
const { REACT_APP_GIPHY_API_KEY } = config;

class SearchForm extends PureComponent {
  state = {
    searchValue: '',
    giphys: [],
    message: ''
  };

  handleSearchBoxChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }
  handleSearchClick = (event) => {
    event.preventDefault();
    console.log('...searching')
    this.getGiphys();
    this.setState({ searchValue: '' })
  }

  getGiphys = async () => {
    try {
      console.log(REACT_APP_GIPHY_API_KEY)
      this.setState({ message: 'collecting giphy RSVPs...' })
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: REACT_APP_GIPHY_API_KEY,
          q: this.state.searchValue
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
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.props.handleSearchSubmit}>
          <label>
            <input className="form-control mr-sm-2" type="text" placeholder="Find me some giphys!" value={this.state.searchValue} onChange={this.handleSearchBoxChange} />
          </label>
          <input className="btn btn-secondary my-2 my-sm-0" type="button" value="Search" onClick={this.handleSearchClick} />
        </form>
        <Mosaic giphys={this.state.giphys} />
      </div>
    )
  }
}

export default SearchForm