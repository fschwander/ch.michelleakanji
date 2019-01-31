import * as React from "react";
import { Image } from "react-bootstrap";
import imgSolange from "../res/imgs/solange.png"

export default class WorksElement extends React.Component {

  render() {
    return (
      <div className='works-element'>
        <div className='random-h-pos-container' style={{left: this.props.left + '%'}}>
          <Image src={imgSolange}/>
          <h2>{ this.props.title }</h2>
          <p>{ this.props.description }</p>
        </div>
      </div>
    )
  }
}