import iconArrowLeft from "../res/icons/arrow-left.svg";
import iconArrowRight from "../res/icons/arrow-right.svg";
import {Carousel} from "react-motion-components";
import React from "react";
import AllWorkTiles from "./AllWorkTiles";
import iconSelectionEmpty from "../res/icons/selection-empty.svg"
import iconSelectionActive from "../res/icons/selection-active.svg"

export default class WorksCarousel extends React.Component {

  state = {
    defaultStyle: {
      width: 400,
      height: 550,
      margin: "auto"
    },
    index: 0
  };

  prev = () => this.setState({index: this.state.index - 1});
  next = () => this.setState({index: this.state.index + 1});
  move = index => this.setState({index});

  getPaginationButtons = () => {
    let nofElements = AllWorkTiles().length;

    let newIndex = this.state.index % nofElements;

    return Array.from({length: nofElements}, (_, i) => {
      let elIsActive = i === (newIndex < 0 ? newIndex + nofElements : newIndex);
      return <button key={i}
                     style={{backgroundImage: `url(${elIsActive ? iconSelectionActive : iconSelectionEmpty})`}}
                     onClick={() => this.move(i)}/>
    });
  };

  render() {
    const {defaultStyle} = this.state;

    return (
      <div>
        <div className='carousel-body' style={{...defaultStyle}}>

          <div className='carousel-nav-arrows'>
            <button className='arrow-left'
                    style={{backgroundImage: `url(${iconArrowLeft})`}}
                    onClick={this.prev}/>

            <button className='arrow-right'
                    style={{backgroundImage: `url(${iconArrowRight})`}}
                    onClick={this.next}/>
          </div>

          <Carousel {...defaultStyle}
                    direction="horizontal"
                    effect="3d"
                    index={this.state.index}
                    onChange={index => this.move(index)}>
            {AllWorkTiles(this.state.index, AllWorkTiles().length)}
          </Carousel>
        </div>

        <div className='carousel-pagination'>{this.getPaginationButtons()}</div>
      </div>
    )
  }
}