import * as React from "react";
import {Link} from "react-router-dom";

export default class WorksTile extends React.Component {

  render() {
    let cssClasses = this.elementIsOnIndex([-1, 0, 1]) ? 'inFront' : 'inBack';
    if(this.elementIsOnIndex([-1])) cssClasses += ' gradientFilter leftFront';
    if(this.elementIsOnIndex([1])) cssClasses += ' gradientFilter rightFront';

    return (
      <div className={'WorksTile ' + cssClasses}>
        <div className='container'>
          <Link to={this.props.link}>
            <div className='imageContainer'>
              <div className='imageBox'
                   style={{backgroundImage: `url(${this.props.image})`}}>
              </div>
            </div>
            <div className='textContainer'>
              <h2>{this.props.title}</h2>
              <p className='no-intent'>{this.props.description}</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  elementIsOnIndex(arr) {
    const {thisIndex, nofElements, activeIndex} = this.props;

    for(let i = 0; i < arr.length; i++) {
      let lastElIndex = (activeIndex + nofElements + arr[i]) % nofElements;
      while (lastElIndex < 0) lastElIndex += nofElements;

      if (lastElIndex === thisIndex) return true;
    }
    return false
  }
}
