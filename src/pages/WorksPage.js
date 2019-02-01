import * as React from "react";
import WorksElement from "../components/WorksTile";

export default class WorksPage extends React.Component {

  getElementsList() {
    return [
      {
        title: 'Vaterland',
        description: 'Audiofeature'
      },
      {
        title: 'Brudi',
        description: 'Text&Bild'
      }
    ]
  }

  getAllWorksElements() {
    const elementsList = this.getElementsList();

    return elementsList.map(
      e =>
        <WorksElement
          title={ e.title }
          description={ e.description }
          key={ e.title }
          left={ this.getRandomHPos() }
        />
    )
  }

  getRandomHPos() {
    return Math.random() * 65;
  }


  render() {
    return (
      <div className='WorksPage'>
        { this.getAllWorksElements() }
      </div>
    )
  }
}