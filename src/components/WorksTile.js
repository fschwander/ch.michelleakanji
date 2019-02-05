import * as React from "react";
import { Link } from "react-router-dom";

export default class WorksTile extends React.Component {

  render() {
    return (
      <Link className='WorksTile' to={ this.props.link }>
        <div className='random-h-pos-container'
             style={ { left: this.props.left + '%' } }>
          <div className='imageBox'
               style={ { backgroundImage: `url(${this.props.image})` } }>
          </div>
          <h2>{ this.props.title }</h2>
          <p>{ this.props.description }</p>
        </div>
      </Link>
    )
  }
}