import React, { PureComponent } from 'react';
import axios from 'axios';
import Mosaic from './Mosaic';
import './giphySection.css';
class GiphySection extends PureComponent {
  state = {
    searchValue: '',
    giphys: [],
    submitGifValue: '',
    loading: false
  };

  handleSearchBoxChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  handleSearchClick = event => {
    event.preventDefault();
    this.getGiphys();
    this.setState({ ...this.state, searchValue: '' });
  };
  getGiphys = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: this.state.searchValue
        }
      });
      this.setState({ ...this.state, giphys: response.data.data });
    } catch (error) {
      window.alert('Sorry, there was a problem fetching giphys.', error);
    }
  };
  handleRandomClick = event => {
    event.target.blur();
    this.getRandomGiphys();
    this.setState({ ...this.state, searchValue: '' });
  };
  getRandomGiphys = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.giphy.com/v1/gifs/random`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY
        }
      });
      this.setState({ ...this.state, giphys: [response.data.data] });
    } catch (error) {
      window.alert('Sorry, there was a problem fetching giphys.', error);
    }
  };

  handleSubmitGiphyChange = event => {
    this.setState({ submitGifValue: event.target.value });
  };
  handleSubmitGiphy = event => {
    event.preventDefault();
    this.submitGiphy();
    this.setState({ ...this.state, submitGifValue: '' });
  };

  submitGiphy = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.post(`https://upload.giphy.com/v1/gifs`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          source_image_url: this.state.submitGifValue
        }
      });
      this.setState({ ...this.state, giphys: [response.data.data] });
    } catch (error) {
      window.alert('Sorry, there was a problem uploading your giphy', error);
    }
  };

  render() {
    return (
      <div className="giphySection">
        <form className="form-inline" onSubmit={this.handleSearchClick}>
          <label>
            <input
              className="form-control"
              type="text"
              placeholder="Find me some giphys!"
              value={this.state.searchValue}
              onChange={this.handleSearchBoxChange}
            />
          </label>
          <input
            id="searchButton"
            className="btn btn-primary btn-sm"
            type="submit"
            value="Search"
          />
        </form>
        <form className="form-inline" onSubmit={this.handleSubmitGiphy}>
          <label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter a gif url!"
              value={this.state.submitGifValue}
              onChange={this.handleSubmitGiphyChange}
            />
          </label>
          <input
            id="submitGifButton"
            className="btn btn-primary btn-sm"
            type="submit"
            value="Submit a Giphy"
          />
        </form>
        <button
          id="surpriseButton"
          className="btn btn-secondary btn-sm"
          onClick={this.handleRandomClick}
        >
          Suprise Me
        </button>
        <Mosaic giphys={this.state.giphys} />
      </div>
    );
  }
}

export default GiphySection;
