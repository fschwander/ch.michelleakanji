import * as React from "react";
import audioFile from '../res/audio/vaterland.mp3';
import PlayAudio from 'react-simple-audio-player'
import chroma from "chroma-js";
import { Image } from "react-bootstrap";
import img from '../res/imgs/vaterland.jpg'


export default class Vaterland extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const colorScale = chroma
      .scale([
        '#E4C1AB',
        '#ffffff',
      ])
      .mode('lch')
      .colors(5)

    return (
      <div className='WorksPage'>

        <h1>Vaterland</h1>

        <Image src={ img }/>

        <div className='audio-player'>
          <PlayAudio
            url={ audioFile }
            colorScale={ colorScale }
            width={ 100 }/>
        </div>

        <p>Vaterland ist ein 45-minütiges Audiofeature, das eine persönliche Geschichte erzählt. Eine Tochter stellt
          sich dem fremd-vertrauten Verhältnis zu ihrem Vater, der zwar im selben Land, doch in einer anderen Gegenwart
          lebt. Während er sich in der Schweizer Leistungsgesellschaft verliert, findet sie sich in ihrer Rolle als
          Erstgeborene nicht zurecht. Und als die beiden endlich wieder eine gemeinsame Sprache finden, nimmt das Leben
          eine neue Wendung.</p>

        <p className='no-text-intent'>Diese Arbeit entstand im Rahmen einer Abschlussarbeit im Master Art Education Kulturpublizistik an der
          Zürcher Hochschule der Künste.</p>
        <p className='no-text-intent'>Mentor: Claudio Bucher</p>
        <p className='no-text-intent'>Mastering: Flo Schär</p>
        <p className='no-text-intent'>Foto: Johanna Hullár</p>
        <p className='no-text-intent'>Veröffentlicht in der&nbsp;
          <a href={ 'https://www.republik.ch/2018/09/18/wer-bist-du-vater' } target='_blank' rel="noopener noreferrer">
            REPUBLIK
          </a>
          ,18.09.18 und in&nbsp;
          <a href={ 'http://www.srf.ch/medien/news/passage-vaterland/' } target='_blank' rel="noopener noreferrer">
            Passagen des Schweizer Radio und Fernsehen SRF</a>
          , 01.02.19.
        </p>
      </div>
    )
  }
}