import * as React from "react";
import WorksTile from "../components/WorksTile";

import imgSolange from "../res/imgs/solange.jpg"
import imgVaterland from "../res/imgs/vaterland.jpg"
import imgHeimat from "../res/imgs/heimat.jpg"
import imgCriticalWhiteness from '../res/imgs/critical-whiteness.jpg';
import imgHardau from '../res/imgs/hardau.jpg';
import imgNegritude from '../res/imgs/negritude.jpg';
import imgSpurenImSand from '../res/imgs/spuren-im-sand.jpg';
import imgProtestSelfie from '../res/imgs/protest-selfie.jpg';


export default class WorksPage extends React.Component {

  getElementsList() {
    return [
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
  }

  getAllWorksTiles() {
    const elementsList = this.getElementsList();

    return elementsList.map(
      e =>
        <WorksTile
          title={ e.title }
          description={ e.description }
          key={ e.title }
          left={ this.getRandomHPos() }
          image={ e.image }
          link={ e.link }/>
    )
  }

  getRandomHPos() {
    return Math.random() * 60;
  }

  render() {
    return (
      <div className='WorksPage'>
        { this.getAllWorksTiles() }
      </div>
    )
  }
}