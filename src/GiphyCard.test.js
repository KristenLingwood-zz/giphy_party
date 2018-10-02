import React from 'react';
import GiphyCard from './GiphyCard';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';


const giphys = {
  data:
  {
    "type": "gif",
    "id": "6VoDJzfRjJNbG",
    "slug": "cat-6VoDJzfRjJNbG",
    "url": "https:giphy.comgifscat-6VoDJzfRjJNbG",
    "bitly_gif_url": "https:gph.isQFgPA0",
    "bitly_url": "https:gph.isQFgPA0",
    "embed_url": "https:giphy.comembed6VoDJzfRjJNbG",
    "username": "",
    "source": "https:www.reddit.comrgifscomments23y94fcat_attack",
    "rating": "g",
    "content_url": "",
    "source_tld": "www.reddit.com",
    "source_post_url": "https:www.reddit.comrgifscomments23y94fcat_attack",
    "is_sticker": 0,
    "import_datetime": "2014-04-25 14:46:21",
    "trending_datetime": "2014-04-25 16:20:56",
    images: {
      "fixed_height_still": {
        "url": "https:media0.giphy.com/media/6VoDJzfRjJNbG200_s.gif",
        "width": "292",
        "height": "200"
      },
      "original_still": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy_s.gif",
        "width": "337",
        "height": "231"
      },
      "fixed_width": {
        "url": "https:media0.giphy.com/media/6VoDJzfRjJNbG200w.gif",
        "width": "200",
        "height": "137",
        "size": "1466997",
        "mp4": "https:media0.giphy.com/media/6VoDJzfRjJNbG200w.mp4",
        "mp4_size": "79650",
        "webp": "https:media0.giphy.com/media/6VoDJzfRjJNbG200w.webp",
        "webp_size": "654260"
      },
      "fixed_height_small_still": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbG100_s.gif",
        "width": "146",
        "height": "100"
      },
      "fixed_height_downsampled": {
        "url": "https:media0.giphy.com/media/6VoDJzfRjJNbG200_d.gif",
        "width": "292",
        "height": "200",
        "size": "203269",
        "webp": "https:media0.giphy.com/media/6VoDJzfRjJNbG200_d.webp",
        "webp_size": "69642"
      },
      "preview": {
        "width": "336",
        "height": "230",
        "mp4": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-preview.mp4",
        "mp4_size": "46179"
      },
      "fixed_height_small": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbG100.gif",
        "width": "146",
        "height": "100",
        "size": "826773",
        "mp4": "https:media0.giphy.com/media6VoDJzfRjJNbG100.mp4",
        "mp4_size": "46936",
        "webp": "https:media0.giphy.com/media6VoDJzfRjJNbG100.webp",
        "webp_size": "416990"
      },
      "downsized_still": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-downsized_s.gif",
        "width": "250",
        "height": "171",
        "size": "28278"
      },
      "downsized": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-downsized.gif",
        "width": "250",
        "height": "171",
        "size": "1242244"
      },
      "downsized_large": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.gif",
        "width": "337",
        "height": "231",
        "size": "4824404"
      },
      "fixed_width_small_still": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbG100w_s.gif",
        "width": "100",
        "height": "69"
      },
      "preview_webp": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-preview.webp",
        "width": "168",
        "height": "115",
        "size": "48458"
      },
      "fixed_width_still": {
        "url": "https:media0.giphy.com/media/6VoDJzfRjJNbG200w_s.gif",
        "width": "200",
        "height": "137"
      },
      "downsized_medium": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.gif",
        "width": "337",
        "height": "231",
        "size": "4824404"
      },
      "original": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.gif",
        "width": "337",
        "height": "231",
        "size": "4824404",
        "frames": "107",
        "mp4": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.mp4",
        "mp4_size": "405526",
        "webp": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.webp",
        "webp_size": "1741384"
      },
      fixed_height: {
        url: "https:media0.giphy.com/media/6VoDJzfRjJNbG/200.gif",
        "width": "292",
        "height": "200",
        "size": "3353376",
        "mp4": "https:media0.giphy.com/media/6VoDJzfRjJNbG/200.mp4",
        "mp4_size": "144405",
        "webp": "https:media0.giphy.com/media/6VoDJzfRjJNbG/200.webp",
        "webp_size": "1248416"
      },
      "looping": {
        "mp4": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-loop.mp4",
        "mp4_size": "631180"
      },
      "original_mp4": {
        "width": "480",
        "height": "328",
        "mp4": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy.mp4",
        "mp4_size": "405526"
      },
      "preview_gif": {
        "url": "https:media0.giphy.com/media6VoDJzfRjJNbGgiphy-preview.gif",
        "width": "109",
        "height": "75",
        "size": "37250"
      },
      "480w_still": {
        "url": "https:media4.giphy.com/media6VoDJzfRjJNbG480w_s.jpg",
        "width": "480",
        "height": "329"
      }
    },
  }
}

describe('<GiphyCard />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GiphyCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GiphyCard giphys={giphys.data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
