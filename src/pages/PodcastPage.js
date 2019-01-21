import * as React from "react";
import backgroundImage from '../res/imgs/samuel-zeller-28779-unsplash_large.jpg';
import audioFile from '../res/audios/vaterland.ogg';
import ReactPlayer from "react-player";
import playIcon from '../res/icons/play.svg';
import pauseIcon from '../res/icons/pause.svg';


export default class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  render() {
    return (
      <div className='PodcastPage '
           style={ {
             background: 'url(' + backgroundImage + ') center center fixed',
             backgroundSize: 'cover'
           } }>

        <div className='playerContainer'>
          <img
            src={ this.state.isPlaying ? pauseIcon : playIcon }
            onClick={ this.state.isPlaying ? this.pause : this.play }/>
          <ReactPlayer
            url={ audioFile }
            onProgress={ this.onProgress }
            playing={ this.state.isPlaying }
            config={ { file: { forceAudio: true } }
            }/>
        </div>
      </div>
    )
  }

  play() {
    this.setState({ isPlaying: true });
  }

  pause() {
    this.setState({ isPlaying: false });
  }
}