import React, { PureComponent } from 'react';
import GiphyCard from './GiphyCard'
import './mosaic.css'

class Mosaic extends PureComponent {

  render() {
    const giphyIMGs = this.props.giphys.map(gif => <GiphyCard key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} title={gif.title} url={gif.url} loading={this.props.loading} source={gif.source} rating={gif.rating} username={gif.username} />)
    return (
      <div>
        <h3>All the giphys say PARTY!!!</h3>
        <div className="mosaic">
          {giphyIMGs}
        </div>
      </div >
    );
  }
}

export default Mosaic;

