import * as React from "react";
import WorksTile from "../components/WorksTile";

import imgSolange from "../res/imgs/solange.png"
import imgVaterland from "../res/imgs/vaterland.jpg"


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
        description: 'Essay',
        image: imgSolange,
        link: 'heimat-schreiben'
      },
      {
        title: 'Protest-Selfie',
        description: 'Reportage',
        image: imgSolange,
        link: 'protest-selfie'
      },
      {
        title: 'Der Wert der Wahrheit',
        description: '',
        image: imgSolange,
        link: 'der-wert-der-wahrheit'
      },
      {
        title: 'Schlimmstenfalls eine Utopie',
        description: '',
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
    return Math.random() * 65;
  }


  render() {
    return (
      <div className='WorksPage'>
        { this.getAllWorksTiles() }
      </div>
    )
  }
}