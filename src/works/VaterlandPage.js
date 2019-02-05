import * as React from "react";
import audioFile from '../res/audio/vaterland.mp3';
import PlayAudio from 'react-simple-audio-player'
import chroma from "chroma-js";


export default class VaterlandPage extends React.Component {

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

        <div className='horizontal-container header-container'>
          <div className='audio-player'>
            <PlayAudio
              url={ audioFile }
              colorScale={ colorScale }
              width={ 100 }/>
          </div>
          <h1>Vaterland</h1>
        </div>

        <p>Vaterland ist ein 45-minütiges Audiofeature, das eine persönliche Geschichte erzählt. Eine Tochter stellt
          sich dem fremd-vertrauten Verhältnis zu ihrem Vater, der zwar im selben Land, doch in einer anderen Gegenwart
          lebt. Während er sich in der Schweizer Leistungsgesellschaft verliert, findet sie sich in ihrer Rolle als
          Erstgeborene nicht zurecht. Und als die beiden endlich wieder eine gemeinsame Sprache finden, nimmt das Leben
          eine neue Wendung.</p>

        <p>Diese Arbeit entstand im Rahmen einer Abschlussarbeit im Master Art Education Kulturpublizistik an der
          Zürcher Hochschule der Künste.</p>
        <p className='no-text-intent'>Mentor: Claudio Bucher</p>
        <p className='no-text-intent'>Mastering: Flo Schär</p>
      </div>
    )
  }
}