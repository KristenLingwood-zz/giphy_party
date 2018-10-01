import React, { PureComponent } from 'react';

class GiphyCard extends PureComponent {
  render() {
    return (
      <div className="card border-primary mb-3" style="max-width: 20rem;">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <img style="height: 200px; width: 100%; display: block;" src={this.props.url} alt={this.props.title} />
          <button type="button" className="btn btn-info btn-sm"><a href="#" className="card-link">See Giphy Details</a></button>
          <button type="button" className="btn btn-success btn-sm"><a href="#" className="card-link">Share to Slack</a></button>
        </div>
      </div>
    )
  }

}

export default GiphyCard
