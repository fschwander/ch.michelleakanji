import * as React from "react";
import backgroundImage from '../res/imgs/samuel-zeller-28779-unsplash_large.jpg';

export default class PodcastPage extends React.Component {

  render() {
    return (
      <div className='PodcastPage ' style={ {
        background: 'url(' + backgroundImage + ') center center fixed',
        backgroundSize: 'cover'
      } }>
        <div className='playerContainer'>
          <p>test</p>
        </div>
      </div>
    )
  }

}