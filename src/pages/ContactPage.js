import * as React from "react";
import iconLinkedIn from '../res/icons/linked_in.svg'
import { Image } from "react-bootstrap";
import {Helmet} from "react-helmet/es/Helmet";
import img from "../res/imgs/critical-whiteness.jpg";

export default class ContactPage extends React.Component {

  render() {
    return (
      <div className='ContactPage'>
        <Helmet>
          <title>Michelle Akanji ∆ Kontakt</title>
          <meta name='description' content='Reportagen, Features und Essays von Michelle Akanji, Kulturpublizistin in Zürich. '/>
          <meta property="og:image" content={img}/>
        </Helmet>

        <div className='center-container'>
          <a className='link'
             href='mailto:kontakt@michelleakanji.ch'>
            kontakt@michelleakanji.ch
          </a>
          <a className='icon'
             href={ 'https://www.linkedin.com/in/michelle-akanji-86345269/' }
             target='_blank' rel="noopener noreferrer">
            <Image src={ iconLinkedIn }/>
          </a>
        </div>
      </div>
    )
  }
}
