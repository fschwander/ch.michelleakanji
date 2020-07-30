import * as React from "react";
import img from "../res/imgs/vaterland.jpg";
import {Helmet} from "react-helmet/es/Helmet";
import './Article.scss';

export default class Article extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div className={'Article'}>
        <Helmet>
          <title>Michelle Akanji ∆ Vaterland</title>
          <meta property="og:image" content={img}/>
          <meta name='description'
                content='Vaterland ist ein 45-minütiges Audiofeature. Erschienen der REPUBLIK und in Passage des Schweizer Radio und Fernsehen SRF'/>
        </Helmet>

        {this.props.children}

      </div>
    )
  }
}
