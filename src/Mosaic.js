import React, { PureComponent } from 'react';
import GiphyCard from './GiphyCard'
import './mosaic.css'

class Mosaic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { giphys: [], message: '' };
  }

  render() {
    const giphyIMGs = this.props.giphys.map(gif => <GiphyCard key={gif.id} src={gif.images.fixed_height_still.url} alt={gif.title} title={gif.title} />)
    console.log(giphyIMGs)
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