import * as React from "react";
import audioFile from '../res/audio/vaterland.mp3';
import PlayAudio from 'react-simple-audio-player'
import chroma from "chroma-js";
import {Image} from "react-bootstrap";
import img from '../res/imgs/vaterland.jpg'
import {Helmet} from "react-helmet";

export default class Vaterland extends React.Component {

  render() {
    const colorScale = chroma
      .scale([
        '#8A8A8A',
        'white',
      ])
      .mode('lch')
      .colors(5)

    return (
      <div className='Works Vaterland'>
        <Helmet>
          <title>Michelle Akanji ∆ Vaterland</title>
          <meta property="og:image" content={img}/>
          <meta name='description' content='Vaterland ist ein 45-minütiges Audiofeature. Erschienen der REPUBLIK und in Passage des Schweizer Radio und Fernsehen SRF.'/>
        </Helmet>

        <h1>Vaterland</h1>

        <p className='no-text-intent'>Ausgezeichnet mit dem Jurypreis und dem Publikumspreis am 9.&nbsp;
          <a href="http://www.sonohr.ch" target='_blank' rel="noopener noreferrer">sonOhr Radio und Podcast Festival</a>
          &nbsp;(22.-24.02.19) in Bern.
        </p>

        <p className='no-text-intent'>Veröffentlicht in der&nbsp;
          <a href={'https://www.republik.ch/2018/09/18/wer-bist-du-vater'} target='_blank' rel="noopener noreferrer">
            REPUBLIK
          </a>
          ,18.09.18 und in&nbsp;
          <a href={'http://www.srf.ch/medien/news/passage-vaterland/'} target='_blank' rel="noopener noreferrer">
            Passage des Schweizer Radio und Fernsehen SRF</a>
          , 01.02.19.
        </p>

        <div className='audioPlayerContainer'>
          <Image src={img}/>
          <div className='audio-player'>
            <PlayAudio
              url={audioFile}
              colorScale={colorScale}
              width={150}/>
          </div>
        </div>

        <p>Vaterland ist ein 45-minütiges Audiofeature, das eine persönliche Geschichte erzählt. Eine Tochter stellt
          sich dem fremd-vertrauten Verhältnis zu ihrem Vater, der zwar im selben Land, doch in einer anderen Gegenwart
          lebt. Während er sich in der Schweizer Leistungsgesellschaft verliert, findet sie sich in ihrer Rolle als
          Erstgeborene nicht zurecht. Und als die beiden endlich wieder eine gemeinsame Sprache finden, nimmt das Leben
          eine neue Wendung.</p>

        <p className='no-text-intent'>Diese Arbeit entstand im Rahmen einer Abschlussarbeit im Master Art Education
          Kulturpublizistik an der
          Zürcher Hochschule der Künste.</p>

        <p className='no-text-intent'>Mentor: Claudio Bucher</p>
        <p className='no-text-intent'>Mastering: Flo Schär</p>
        <p className='no-text-intent'>Foto: Johanna Hullár</p>
      </div>
    )
  }
}
