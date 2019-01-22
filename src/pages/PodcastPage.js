import * as React from "react";
import backgroundImage from '../res/imgs/samuel-zeller-28779-unsplash_large.jpg';
import audioFile from '../res/audios/vaterland.ogg';
import ReactPlayer from "react-player";
import playIcon from '../res/icons/play.svg';
import pauseIcon from '../res/icons/pause.svg';
import { Carousel, ProgressBar } from "react-bootstrap";
import Duration from "../utils/Duration";

export default class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      played: 0,
      duration: 0,
      index: 0,
      direction: null
    };
    this.sizes = {
      popUpWidth: 400,
      popUpHeight: 600
    }

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

        { this.initPopUpContainer() }
      </div>
    )
  }

  initPopUpContainer() {
    return (
      <div className='popUpContainer'>
        <Carousel activeIndex={ this.state.index }
                  direction={ this.state.direction }
                  onSelect={ this.handleSelect }
                  controls={ false }>
          <Carousel.Item>
              <h3>Vaterland</h3>
              <p>Audiofeature von Michelle Akanji</p>
              <p>
                Vaterland ist ein 45-minütiges Audiofeature, das eine persönliche Geschichte erzählt. Eine Tochter
                stellt sich dem fremd-vertrauten Verhältnis zu ihrem Vater, der zwar im selben Land, doch in einer
                anderen Gegenwart lebt. Während er sich in der Schweizer Leistungsgesellschaft verliert, findet sie
                sich
                in ihrer Rolle als Erstgeborene nicht zurecht. Und als die beiden endlich wieder eine gemeinsame
                Sprache
                finden, nimmt das Leben eine neue Wendung.
              </p>
              <p>
                Bitte mit Kopfhörern hören.
              </p>
          </Carousel.Item>

          <Carousel.Item>
              <h3>
                Impressum
              </h3>
              <p>
                Diese Arbeit entstand im Rahmen einer Abschlussarbeit im Master Art Education Kulturpublizistik an der Zürcher Hochschule der Künste.
              </p>
              <p>
                Autorin: Michelle Akanji<br/>Mentor: Claudio Bucher<br/>Webdesign: Fabian Schwander<br/>Mastering: Flo
                Schär
              </p>

              <p>
                &copy; 2018 Michelle Akanji
              </p>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
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