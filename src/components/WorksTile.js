import * as React from "react";
import {Link} from "react-router-dom";

export default class WorksTile extends React.Component {

  render() {
    const {thisIndex, nofElements, activeIndex} = this.props;

    let lastElIndex = (activeIndex + nofElements - 1) % nofElements;
    while (lastElIndex < 0) lastElIndex += nofElements;

    let nextElIndex = (activeIndex + 1) % nofElements;
    while (nextElIndex < 0) nextElIndex += nofElements;

    let currentIndex = activeIndex % nofElements;
    while(currentIndex <0) currentIndex += nofElements;

    let className = lastElIndex === thisIndex || currentIndex === thisIndex || nextElIndex === thisIndex ? 'inFront' : 'inBack';

    return (
      <div className={'WorksTile ' + className}>
        <div className='container'>
          <Link to={this.props.link}>
            <div className='imageContainer'>
              <div className='imageBox'
                   style={{backgroundImage: `url(${this.props.image})`}}>
              </div>
            </div>
            <h2>{this.props.title}</h2>
            <p className='no-intent'>{this.props.description}</p>
          </Link>
        </div>
      </div>
    )
  }
}