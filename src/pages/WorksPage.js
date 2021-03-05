import React from "react";
import {WorksCarousel} from "../components/WorksCarousel";
import {Helmet} from "react-helmet/es/Helmet";
import img from "../res/imgs/critical-whiteness.jpg";


export default class WorksPage extends React.Component {

  render() {
    return (
      <div className='WorksPage'>
        <Helmet>
          <title>Michelle Akanji</title>
          <meta name='description' content='Reportagen, Features und Essays von Michelle Akanji, Kulturpublizistin in Zürich. '/>
          <meta property="og:image" content={img}/>
        </Helmet>

        <WorksCarousel/>
      </div>
    );
  }
}
