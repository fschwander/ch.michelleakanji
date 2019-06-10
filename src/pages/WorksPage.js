import React from "react";

import imgSolange from "../res/imgs/solange.jpg"
import imgVaterland from "../res/imgs/vaterland.jpg"
import imgHeimat from "../res/imgs/heimat.jpg"
import imgCriticalWhiteness from '../res/imgs/critical-whiteness.jpg';
import imgHardau from '../res/imgs/hardau.jpg';
import imgNegritude from '../res/imgs/negritude.jpg';
import imgSpurenImSand from '../res/imgs/spuren-im-sand.jpg';
import imgProtestSelfie from '../res/imgs/protest-selfie2.jpg';
import {Carousel} from "react-motion-components";
import WorksTile from "../components/WorksTile";


export default class WorksPage extends React.Component {

  state = {
    index: 0,
    effect: "3d",
    direction: "horizontal",
    elementsList: [
      {
        title: 'Vaterland',
        description: 'Audiofeature',
        image: imgVaterland,
        link: 'vaterland'
      },
      {
        title: 'Heimat schreiben',
        description: 'Essay über das Schreiben',
        image: imgHeimat,
        link: 'heimat-schreiben'
      },
      {
        title: 'Protest-Selfie',
        description: 'Artikel über Protest-Selfies in PROTEST-Publikation für das Museum für Gestaltung',
        image: imgProtestSelfie,
        link: 'protest-selfie'
      },
      {
        title: 'Schlimmstenfalls eine Utopie',
        description: 'Reportage über das Hardauquartier',
        image: imgHardau,
        link: 'schlimmstenfalls-eine-utopie'
      },
      {
        title: 'Spuren im Sand',
        description: 'Metareporter-Beitrag für REPORTAGEN',
        image: imgSpurenImSand,
        link: 'spuren-im-sand'
      },
      {
        title: 'Critical Whiteness: Looking at one\'s self through the eyes of others',
        description: 'Fachartikel in der Publikation "Im Welttheater" für das Zürcher Theater Spektakel',
        image: imgCriticalWhiteness,
        link: 'critical-whiteness'
      },
      {
        title: 'Solange – A Seat at the Table',
        description: 'Albumrezension für GDS.FM',
        image: imgSolange,
        link: 'solange'
      },
      {
        title: 'W wie Négritude',
        description: 'Fachartikel in der Publikation "Dada Afrika" für das Museum Rietberg',
        image: imgNegritude,
        link: 'w-wie-negritude'
      }
    ]
  };

  prev = () => {
    this.setState({index: this.state.index - 1});
  };

  next = () => {
    this.setState({index: this.state.index + 1});
  };

  move = index => {
    this.setState({index});
  };

  getAllWorksTiles = () => {
    const {elementsList} = this.state;
    return elementsList.map((e, i) =>
      <WorksTile title={e.title}
                 description={e.description}
                 key={i}
                 image={e.image}
                 link={e.link}/>
    )
  };

  render() {
    const defaultStyle = {
      width: 400,
      height: 300,
      margin: "50px auto"
    };

    return (
      <div className='WorksPage'>
        <div className='carousel-navigation'>
          <button onClick={this.prev}>prev</button>
          <button onClick={this.next}>next</button>
          {Array.from({length: this.state.elementsList.length}, (_, i) => {
            return <button key={i} onClick={() => this.move(i)}>move {i}</button>
          })}
        </div>

        <div className='carousel-body' style={{...defaultStyle}}>
          <Carousel
            {...defaultStyle}
            direction={this.state.direction}
            effect={this.state.effect}
            index={this.state.index}
            onClick={() => console.log(this.state)}
            onChange={index => this.move(index)}>
            {this.getAllWorksTiles()}
          </Carousel>
        </div>
      </div>
    );
  }
}