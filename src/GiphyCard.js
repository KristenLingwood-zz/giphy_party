import React, { PureComponent } from 'react';
import axios from 'axios';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './giphyCard.css';

class GiphyCard extends PureComponent {
  shareToSlack = async src => {
    try {
      const data = JSON.stringify({
        text: { src }
      });
      await axios
        .post(
          'https://hooks.slack.com/services/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',
          data
        )
        .then(res => {
          window.alert('Your gif has been posted to Slack');
          console.log('Slack response: ', res);
        });
    } catch (error) {
      console.log(error);
      window.alert('Sorry, there was a problem posting to Slack.');
    }
  };

  render() {
    return (
      <div className="card border-primary mb-3">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <img
            height="100%"
            width="100%"
            src={this.props.src}
            alt={this.props.title}
          />
          <div className="cardButtons">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-bottom" title="Giphy Info">
                  <strong>{this.props.title}</strong>
                  <ul>
                    <li>Source: {this.props.source}</li>
                    <li>Original Poster: {this.props.username}</li>
                    <li>Rating: {this.props.rating}</li>
                  </ul>
                </Popover>
              }
            >
              <button className="btn btn-info btn-sm infoButton">Info</button>
            </OverlayTrigger>
            <button type="button" className="btn btn-success btn-sm">
              <a
                onClick={() => this.shareToSlack(this.props.src)}
                className="card-link"
              >
                Share to Slack
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GiphyCard;
