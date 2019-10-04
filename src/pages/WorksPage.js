import React from "react";
import WorksCarousel from "../components/WorksCarousel";
import AllWorkTiles from "../components/AllWorkTiles";


export default class WorksPage extends React.Component {

  render() {
    return (
      <div className='WorksPage'>
        {window.innerWidth > 900 ? <WorksCarousel/> : <AllWorkTiles/>}
      </div>
    );
  }
}