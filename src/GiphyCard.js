import React, { PureComponent } from 'react';
import './giphyCard.css'
class GiphyCard extends PureComponent {
  render() {
    return (
      <div className="card border-primary mb-3">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <img height="75%" width="75%" src={this.props.src} alt={this.props.title} />
          <button type="button" className="btn btn-secondary btn-sm"><a href="#" className="card-link">See Giphy Details</a></button>
          <button type="button" className="btn btn-success btn-sm"><a href="#" className="card-link">Share to Slack</a></button>
        </div>
      </div>
    )
  }

}

export default GiphyCard
