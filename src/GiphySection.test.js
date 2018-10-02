import React from 'react';
import GiphySection from './GiphySection';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';



describe('<GiphySection />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GiphySection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GiphySection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
