import React, { PureComponent } from 'react';
import GiphyCard from './GiphyCard'

class Mosaic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { giphys: [], message: '' };
  }

  render() {
    const { giphys } = this.props
    const giphyIMGs = giphys.map(gif => <GiphyCard key={gif.id} url={gif.url} alt={gif.title} title={gif.title} />)

  return(
      <div>
  <h3>All the giphys say PARTY!!!</h3>
{ giphyIMGs }
      </div >
    );
  }
}

export default Mosaic;

