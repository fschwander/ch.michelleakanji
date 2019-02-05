import * as React from "react";
import WorksTile from "../components/WorksTile";

import imgSolange from "../res/imgs/solange.png"
import imgVaterland from "../res/imgs/vaterland.jpg"
import imgHeimat from "../res/imgs/heimat.jpg"


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
        description: 'Die Schweiz ist nicht mein einziges Zuhause. Wenn die Heimat und Geschichten ein untrennbares Paar sind – wohin gehöre ich als Autorin? Ein Plädoyer für oder gegen afropolitisches Schreiben',
        image: imgHeimat,
        link: 'heimat-schreiben'
      },
      {
        title: 'Protest-Selfie',
        description: 'Zwischen Selbstdarstellung und Protest-Identität',
        image: imgSolange,
        link: 'protest-selfie'
      },
      {
        title: 'Der Wert der Wahrheit',
        description: 'Transparenz ist ein Marketinginstrument – wie macht ein von Aktivisten gemachter Dokumentarfilm über ihr eigenes Projekt seinen Wirklichkeitsfilter transparent?',
        image: imgSolange,
        link: 'der-wert-der-wahrheit'
      },
      {
        title: 'Schlimmstenfalls eine Utopie',
        description: 'Was macht den Charakter einer Siedlung aus? Und wer sorgt dafür, dass dieser bestehen bleibt? Unterwegs in der Zürcher Hardau.',
        image: imgSolange,
        link: 'schlimmstenfalls-eine-utopie'
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
      <div className='Works'>
        { this.getAllWorksTiles() }
      </div>
    )
  }
}