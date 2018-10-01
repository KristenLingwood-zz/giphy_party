import React, { PureComponent } from 'react';
import axios from 'axios';
import Mosaic from './Mosaic';
import './searchForm.css'
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
    this.getGiphys();
    this.setState({ searchValue: '' })
  }

  getGiphys = async () => {
    try {
      this.setState({ message: 'collecting giphy RSVPs...' })
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: this.state.searchValue
        }
      })
      this.setState({ ...this.state, giphys: response.data.data, message: '' })
    } catch (error) {
      window.alert('Sorry, there was a problem fetching giphys.', error)
    }
  }
  render() {
    return (
      <div className="search">
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