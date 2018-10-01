import React, { PureComponent } from 'react';


class Mosaic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { giphys: [], message: '' };
  }


  render() {
    return (
      <div>
        <h3>All the giphys say PARTY!!!</h3>
      </div>
    );
  }
}

export default Mosaic;

