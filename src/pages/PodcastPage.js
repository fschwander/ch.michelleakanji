import * as React from "react";
import backgroundImage from '../res/imgs/samuel-zeller-28779-unsplash_large.jpg';
import audioFile from '../res/audios/vaterland.ogg';
import ReactPlayer from "react-player";
import playIcon from '../res/icons/play.svg';
import pauseIcon from '../res/icons/pause.svg';
import { ProgressBar } from "react-bootstrap";
import Duration from "../utils/Duration";

export default class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      played: 0,
      duration: 0
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
          <ReactPlayer
            ref={ this.ref }
            className='player'
            url={ audioFile }
            onProgress={ this.onProgress }
            onDuration={ this.onDuration }
            playing={ this.state.isPlaying }
            config={ { file: { forceAudio: true } }
            }/>
          <img
            className='button'
            src={ this.state.isPlaying ? pauseIcon : playIcon }
            onClick={ this.state.isPlaying ? this.pause : this.play }
            alt='Buttons'/>

          <div className='seekBar'>
            <ProgressBar now={ this.state.played * 100 }/>
            <input
              type='range' min={ 0 } max={ 1 } step='any'
              value={ this.state.played }
              onMouseDown={ this.onSeekMouseDown }
              onTouchStart={ this.onSeekMouseDown }
              onChange={ this.onSeekChange }
              onTouchMove={ this.onSeekChange }
              onMouseUp={ this.onSeekMouseUp }
              onTouchEnd={ this.onSeekMouseUp }
            />
          </div>
          <Duration seconds={ this.state.played * this.state.duration }/>
        </div>
      </div>
    )
  }

  ref = player => this.player = player;

  play() {
    this.setState({ isPlaying: true });
  }

  pause() {
    this.setState({ isPlaying: false });
  }

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  };

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  };

  onSeekMouseDown = () => {
    this.setState({ seeking: true })
  };

  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value))
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }
}