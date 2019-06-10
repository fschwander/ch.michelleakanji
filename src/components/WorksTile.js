import * as React from "react";
import { Link } from "react-router-dom";

export default class WorksTile extends React.Component {

  render() {
    return (
      <div className='WorksTile'>
          <div className='container'>
            <Link to={ this.props.link }>
              <div className='imageContainer'>
                <div className='imageBox'
                     style={ { backgroundImage: `url(${this.props.image})` } }>
                </div>
              </div>
              <h2>{ this.props.title }</h2>
              <p className='no-intent'>{ this.props.description }</p>
            </Link>
        </div>
      </div>
    )
  }
}